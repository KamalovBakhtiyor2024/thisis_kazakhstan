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
              h4.font-weight-bold.text-center.text-uppercase Регистрация
                br
                span портал образовательных учреждений
          div(v-if="error").warning-fields.pa-4.mb-4
            | {{ error }}
          div.fields.pa-4.px-2
            v-form(v-model="formValid")
              v-autocomplete(
                v-model="select_educational_institution"
                :items="educational_institutions"
                item-text="name_ru"
                hide-details
                item-value="id"
                label="Образовательное учреждение"
                outlined
                prepend-inner-icon="mdi-school" 
                v-if="register_stage === 3"
              ).signin-dialog-text-field.select
              v-text-field(
                prepend-inner-icon="mdi-account" 
                label="Логин:" 
                outlined 
                v-if="register_stage === 1"
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
                v-if="register_stage === 1"
                v-model="password"
                type="password"
                hide-details="auto"
                :class="active_field_password_repeat ? 'mb-4' : null"
                :rules="passwordRules"
              ).signin-dialog-text-field
              v-text-field(
                prepend-inner-icon="mdi-lock" 
                label="Повторить пароль:" 
                outlined 
                dense
                v-if="active_field_password_repeat && register_stage === 1"
                v-model="password_repeat"
                type="password"
                hide-details="auto"
                :rules="passwordRules"
              ).signin-dialog-text-field
              v-text-field(
                prepend-inner-icon="mdi-account" 
                label="Имя:"
                v-model="first_name" 
                outlined 
                v-if="register_stage === 2"
                dense
                type="text"
                hide-details="auto"
                :rules="[(v) => !!v || 'Имя обязателено']"
              ).signin-dialog-text-field.mb-4
              v-text-field(
                prepend-inner-icon="mdi-account" 
                label="Фамилия:"
                v-model="last_name" 
                outlined 
                v-if="register_stage === 2"
                dense
                type="text"
                hide-details="auto"
                :rules="[(v) => !!v || 'Фамилия обязателена']"
              ).signin-dialog-text-field.mb-4
              v-text-field(
                prepend-inner-icon="mdi-email" 
                label="Почта:"
                v-model="email" 
                outlined 
                v-if="register_stage === 2"
                dense
                type="email"
                hide-details="auto"
                :rules="emailRules"
              ).signin-dialog-text-field.mb-4
              v-text-field(
                prepend-inner-icon="mdi-phone" 
                label="Телефон:"
                v-model="phone" 
                outlined 
                dense
                v-if="register_stage === 2"
                type="tel"
                hide-details="auto"
                :rules="phoneRules"
              ).signin-dialog-text-field
              label.d-flex.align-start.font-weight-medium.mt-4
                input( 
                  type="checkbox" 
                  name="agree" 
                  v-model="agree"
                  :checked="agree"
                ).agree-input
                div.agree
                  | Я соглашаюсь с 
                  a(href="#") пользовательским соглашением 
                  | и 
                  a(href="#") политикой конфиденциальности
          div.buttons.d-flex.flex-column.mt-4
            v-btn(
              elevation="0"
              block
              style="font-weight: 600;"
              @click="signup"
            ) Завершить регистрацию
            v-btn(
              elevation="0"
              block
              style="font-weight: 600;"
              @click="$router.push('/signin')"
            ) Войти
</template>

<script>
import axios from "axios";
import system from "../mixins/system";

export default {
  name: "SignupView",
  mixins: [system],
  data() {
    return {
      formValid: false,
      login: null,
      select_educational_institution: null,
      register_stage: 1,
      email: null,
      agree: false,
      first_name: null,
      last_name: null,
      active_field_password_repeat: false,
      password_repeat: null,
      password: null,
      error: null,
      educational_institutions: null,
      regex: /^[a-zA-Z0-9]{6,}/,
      phone: null,
      phone_regex: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      phoneRules: [
        (v) => this.phone_regex.test(v) || "Неверно введен номер телефона",
      ],
      emailRules: [
        (v) => !!v || "Email обязателен",
        (v) => /.+@.+\..+/.test(v) || "Не корректный email",
      ],
      passwordRules: [
        (v) => !!v || "Пароль обязателен",
        (v) =>
          this.regex.test(v) ||
          "Пароль должен состоять из 6 цифр и латинских букв",
      ],
    };
  },
  created() {
    this.get_educational_institutions();
  },
  methods: {
    get_educational_institutions() {
      axios
        .get(this.$store.state.api_url + "educational_institutions/")
        .then((response) => {
          this.educational_institutions = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signup() {
      if (this.agree) {
        switch (this.register_stage) {
          case 1:
            this.pre_register();
            break;
          case 2:
            if (!this.formValid) {
              this.error = "Не все поля заполнены";
            } else {
              // Переключится на третью стадию выбора образовательного учреждения
              this.error = null;
              this.register_stage = 3;
            }
            break;
          case 3:
            if (this.select_educational_institution) {
              this.error = null;
              this.register();
            } else {
              this.error = "Выберите образовательное учреждение";
            }
            break;
        }
      } else {
        this.error =
          "Согласитесь с пользовательским соглашением и политикой конфиденциальности";
      }
    },
    pre_register() {
      axios
        .post(this.$store.state.api_url + "register_user/", {
          login: this.login,
          first_stage: true,
        })
        .then(() => {
          // Проверить правильность ввода логина и пароля
          if (this.login !== null && this.regex.test(this.password)) {
            this.error = null;

            if (this.active_field_password_repeat) {
              // Проверить совпадает ли password с password_repeat
              if (this.password === this.password_repeat) {
                // Переключится на вторую стадию регистрации
                this.register_stage = 2;
                this.error = null;
              } else {
                this.error = "Пароль не совпадает";
              }
            }

            this.active_field_password_repeat = true;
          } else {
            this.error = "Не все поля заполнены";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "Данный пользователь существует, войдите в аккаунт";
        });
    },
    reload_page_by_time(timeout) {
      setTimeout(() => {
        this.$router.push("/signin");
        location.reload();
      }, timeout);
    },
    register() {
      axios
        .post(this.$store.state.api_url + "register_user/", {
          login: this.login,
          first_stage: false,
          password: this.password,
          phone: this.phone,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          educational_institution: this.select_educational_institution,
        })
        .then((response) => {
          console.log(response.data);

          this.call_multi_dialog(true, response.data.message, "complete");
          this.reload_page_by_time(5000);
        })
        .catch((error) => {
          console.log(error);
        });
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

.agree {
  font-size: 14px;
  line-height: 18px;

  &-input {
    margin-top: 3px;
    margin-right: 4px;
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

  .top {
    margin-bottom: 108px;

    &-account {
      transform: translate(-50%, 14%);
    }
  }
}
</style>
