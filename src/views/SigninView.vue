<template lang="pug">
div
  main
    section.signin
      v-container.py-16
        v-card.card.pa-4
          div.top.d-flex.align-center
            div.top-account.d-flex.flex-column.align-center
              div.top-account-icon
                v-icon mdi-account-circle
              h4.font-weight-bold.text-center.text-uppercase Авторизация
                br
                span портал образовательных учреждений
          div(v-if="error").warning-fields.pa-4.mb-4
            | {{ error }}
          div.fields.pa-4.px-2
            v-form(v-model="formValid")
              v-text-field(
                prepend-inner-icon="mdi-account" 
                label="Логин:" 
                outlined 
                dense
                type="text"
                v-model="login"
                hide-details="auto"
                :rules="[(v) => !!v || 'Логин обязателен']"
              ).signin-dialog-text-field.mb-4
              v-text-field(
                prepend-inner-icon="mdi-lock" 
                label="Пароль:" 
                outlined 
                dense
                v-model="password"
                type="password"
                hide-details="auto"
                :rules="passwordRules"
              ).signin-dialog-text-field
          div.remember.d-flex.align-center.justify-space-between.mt-2
            label.d-flex.align-center.font-weight-medium
              input(
                style="margin-right: 4px;" 
                type="checkbox"
                name="rememberMe" 
                v-model="rememberMe"
                :checked="rememberMe"
              )
              | Запомнить меня
            a(href="#").text-decoration-none Забыли пароль?
          div.buttons.d-flex.flex-column.mt-4
            v-btn(
              elevation="0"
              block
              style="font-weight: 600;"
              @click="signin"
            ) Войти
            v-btn(
              elevation="0"
              block
              style="font-weight: 600;"
              @click="$router.push('/signup')"
            ) Зарегистрироваться
</template>

<script>
import axios from "axios";
import system from "../mixins/system";

export default {
  name: "SigninView",
  mixins: [system],
  data() {
    return {
      formValid: false,
      rememberMe: false,
      login: null,
      password: null,
      error: null,
      regex: /^[a-zA-Z0-9]{6,}/,
      passwordRules: [
        (v) => !!v || "Пароль обязателен",
        (v) =>
          this.regex.test(v) ||
          "Пароль должен состоять из 6 цифр и латинских букв",
      ],
    };
  },
  created() {
    // Получить куки на случай, если ранее checked rememberMe
    this.getCookieDataForRememberMe();
  },
  methods: {
    signin() {
      if (!this.formValid) {
        this.error = "Введите имя пользователя и пароль";
      } else {
        this.auth();
      }
    },
    push_page_by_time(timeout) {
      setTimeout(() => {
        this.$router.push("/portal-of-education");
      }, timeout);
    },
    auth() {
      axios
        .get(this.$store.state.api_url + "signin", {
          params: {
            login: this.login,
            password: this.password,
          },
        })
        .then((response) => {
          this.error = null;

          // Сохранить user в store
          this.$store.commit("set_user", response.data[1]);

          // Сохранить id и token
          localStorage.setItem("id", response.data[0].id);
          localStorage.setItem("token", response.data[0].token);

          // Сохранить куки для rememberMe
          this.rememberMe
            ? this.saveCookieForRememberMe()
            : this.deleteCookieForRememberMe();

          // Послать уведомление об успешной авторизации
          this.call_multi_dialog(true, "Успешная авторизация", "complete");
          this.push_page_by_time(5000);
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status === 400) {
            this.error = "Неверный пароль";
          } else if (error.response.status === 404) {
            this.error = "Данного пользователя не существует";
          }
        });
    },
    getCookieDataForRememberMe() {
      // Разделяем строку cookie на отдельные куки
      const cookies = document.cookie.split(";");

      // Проходим по каждой части строки cookie
      cookies.forEach((cookie) => {
        const [cookieName, cookieValue] = cookie
          .split("=")
          .map((c) => c.trim());

        // Проверяем имя куки и извлекаем значения login и password
        if (cookieName === "login") {
          this.login = cookieValue;
        } else if (cookieName === "password") {
          this.password = cookieValue;
        }
      });

      this.login && this.password ? (this.rememberMe = true) : null;
    },
    deleteCookieForRememberMe() {
      const path = "/signin";

      // Устанавливаем время жизни куки на прошедшую дату для их удаления
      document.cookie = `${encodeURIComponent("login")}=${encodeURIComponent(
        ""
      )}; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
      document.cookie = `${encodeURIComponent("password")}=${encodeURIComponent(
        ""
      )}; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    },
    saveCookieForRememberMe() {
      const login = this.login;
      const password = this.password;

      const path = "/signin";

      let date = new Date(Date.now() + 86400e3);
      date = date.toUTCString();

      document.cookie = `${encodeURIComponent("login")}=${encodeURIComponent(
        login
      )}; path=${path}; expires=Tue; ${date}`;

      document.cookie = `${encodeURIComponent("password")}=${encodeURIComponent(
        password
      )}; path=${path}; expires=Tue; ${date}`;
    },
  },
};
</script>

<style scoped lang="scss">
.signin {
  position: relative;
  background-image: url("../assets/backgrounds/mountain-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(../assets/images/raster.svg);
    background-size: 4px 4px;
  }
}

h4 {
  & > span {
    color: var(--main-blue);
  }
}

.card {
  border-radius: 10px !important;
  max-width: 500px;
  margin: auto;
  margin-top: 28px;
}

.remember {
  & > * {
    font-size: 14px;
    width: fit-content;
  }
}

.warning-fields {
  color: #842029;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
}

.buttons {
  gap: 12px;
}

.fields {
  border: 1px solid #e2e2e2;
  border-radius: 8px !important;
}

.signin-dialog-text-field {
  border-radius: 8px;
}

.top {
  margin-bottom: 78px;
  position: relative;

  &-account {
    position: absolute;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 6%);

    &-icon {
      padding: 4px;
      background-color: #fff;
      border-radius: 50%;
      border-top: 1px solid #d8d8d8;

      & > * {
        font-size: 62px;
        color: black;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .warning-fields {
    font-size: 14px;
  }
}
</style>
