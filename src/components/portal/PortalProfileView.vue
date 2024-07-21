<template lang="pug">
div
  v-container.py-0
    h2(class="title mr-16").text-uppercase Профиль
    v-card(class="card" max-width="1115").mt-6
      div(class="prompt")
        v-icon(size="32") mdi-information-outline
        div Для изменения информации обратитесь к оператору
      div(class="avatar")
        v-icon(class="no-avatar") mdi-account-circle
      div(class="card-top")
      v-col(class="card-content")
        v-row(class="justify-center")
          div(class="left")
            div(class="left-content")
              div(class="mb-4")
                div(class="mb-2 left-category") Имя
                div(class="left-content") 
                  | {{ $store.state.user.user.first_name }} {{ $store.state.user.user.last_name }}
              div(class="mb-4")
                div(class="mb-2 left-category") Имя пользователя
                div(class="left-content") 
                  | {{ $store.state.user.user.username }}
              div(class="mb-4")
                div(class="mb-2 left-category") ID пользователя
                div(class="left-content") {{ $store.state.user.id }}
              div(class="mb-4")
                div(class="mb-2 left-category") Телефон
                div(class="left-content") +77779318958
              div
                div(class="mb-2 left-category") E-mail
                div(class="left-content") {{ $store.state.user.user.email }}
          div(class="right")
            div(class="right-content")
              div(class="mb-4")
                div(class="mb-2 left-category") Роль
                div(class="left-content") {{ role }}
              div(class="mb-4")
                div(class="mb-2 left-category") Образовательное учреждение
                div(class="left-content") 
                  | {{ $store.state.user.educational_institution.name_ru }}
              div(class="mb-4")
                div(class="mb-2 left-category") Всего заявок
                div(class="left-content") 6
              div(
                class="mb-4" 
                v-if="$store.state.user.role === 2"
              )
                div(class="mb-2 left-category") Всего опросов
                div(class="left-content") 10
              div(v-if="$store.state.user.role === 2")
                div(class="mb-2 left-category") Всего тестов
                div(class="left-content") 15
</template>

<script>
export default {
  name: "PortalProfileView",
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    role() {
      if (this.$store.state.user.role === 1) {
        return "Пользователь";
      } else {
        return "Директор";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 36px !important;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #121133 !important;
}

.no-avatar {
  font-size: 156px;
}

.card {
  background: #ffffff;
  box-shadow: 0 0 8px 0 #ededed !important;
  border-radius: 15px !important;
  position: relative;

  &-top {
    width: 100%;
    height: 110px;
    background: rgba(98, 197, 102, 0.5);
    border-radius: 10px 10px 0 0 !important;
    overflow: hidden;
    position: relative;
  }

  &-content {
    margin-top: 52px !important;
    padding-left: 75px !important;
    padding-bottom: 110px !important;
    padding-right: 25px !important;
  }
}

.prompt {
  position: absolute;
  bottom: 34px;
  right: 92px;
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #555555;

  & > div {
    margin-left: 10px !important;
  }
}

.avatar {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50% !important;
  top: 45px;
  left: 40%;
  margin-right: -50%;
  transform: translate(-50%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: #fafafa;
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 5%);
}

.left {
  display: flex;
  justify-content: center;
  width: 50%;
  padding-right: 40px !important;

  &-content {
    width: 380px;
  }

  &-category {
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #afafaf;
  }

  &-content {
    font-weight: 500;
    font-size: 20px !important;
    line-height: 24px;
    color: #232323;
  }
}

.right {
  display: flex;
  justify-content: center;
  width: 50%;
  padding-right: 40px !important;

  &-content {
    width: 380px;
  }

  &-category {
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #afafaf;
  }

  &-content {
    font-weight: 500;
    font-size: 20px !important;
    line-height: 24px;
    color: #232323;
  }
}

.ball {
  margin-top: 125px !important;
}

.balls {
  background: #ff916f;
  border-radius: 10px;
  width: 190px;
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 10px;
  color: #ffffff;

  &-icon {
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 1200px) {
  .left {
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 960px) {
  .no-avatar {
    font-size: 98px;
  }
  .container {
    padding: 0 20px !important;
  }

  .left {
    width: 100%;
    padding: 0 40px !important;

    &-content {
      width: inherit !important;
    }

    &-category {
      font-size: 16px !important;
    }
  }

  .right {
    width: 100%;
    padding: 0 40px !important;
    margin-top: 48px;

    &-content {
      width: inherit !important;
    }

    &-category {
      font-size: 16px !important;
    }
  }

  .page-title {
    padding-bottom: 10px !important;
  }

  .card {
    padding-bottom: 120px !important;

    &-top {
      height: 86px;
    }

    &-content {
      padding: 0 !important;
      margin-top: 72px !important;
    }
  }

  .avatar {
    width: 80px !important;
    left: 70px !important;
    top: 40px !important;
    height: 80px !important;
  }

  .ball {
    margin-top: 45px !important;
    padding-left: 30px !important;
  }

  .prompt {
    font-size: 14px !important;
    left: 40px !important;
    right: 20px !important;
    bottom: 36px !important;
  }
}

@media screen and (max-width: 600px) {
  .card {
    padding-bottom: 160px !important;
  }

  .title {
    font-size: 28px !important;
  }
}
</style>
