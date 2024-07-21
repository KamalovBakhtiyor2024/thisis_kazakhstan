<template lang="pug">
div(v-if="$store.state.user").drawer-root
  div.drawer-container
    div.main-content
      ul.pa-0
        li(@click="$router.push('/portal-of-education/')").d-flex.align-center
          div.left
            div.avatar
              div.user-status
              v-icon.avatar-icon mdi-account-circle
          div(
            :class="$route.path === '/portal-of-education' ? 'active' : null"
          ).middle
            div.user-name
              | bahtierkamalov21
            div.user-group
              | Пользователь
          div.right
            div.btn-open-list
              v-icon mdi-arrow-right-bold
        li(@click="$router.push('/portal-of-education/polls')").d-flex.align-center
          div.left.gray
            v-icon(color="black" size="32") mdi-chart-box
          div(
            :class="$route.path === '/portal-of-education/polls' ? 'active' : null"
          ).middle
            div
              | Опросы
        li(@click="$router.push('/portal-of-education/my-polls')").d-flex.align-center
          div.left.gray
            v-icon(color="black" size="32") mdi-human-male-board-poll
          div(
            :class="$route.path === '/portal-of-education/my-polls' ? 'active' : null"
          ).middle
            div
              | Мои опросы
        //- li(@click="$router.push('/portal-of-education/responses')").d-flex.align-center
        //-   div.left.gray
        //-     v-icon(color="black" size="32") mdi-email-multiple
        //-   div(
        //-     :class="$route.path === '/portal-of-education/responses' ? 'active' : null"
        //-   ).middle
        //-     div
        //-       | Заявки 
        li(
          v-if="$store.state.user.role === 2"
          @click="$router.push('/portal-of-education/statistics')"
        ).d-flex.align-center
          div.left.gray
            v-icon(color="black" size="32") mdi-chart-bar
          div(
            :class="$route.path === '/portal-of-education/statistics' ? 'active' : null"
          ).middle
            div
              | Статистика
        li(@click="$router.push('/portal-of-education/support')").d-flex.align-center
          div.left.gray
            v-icon(color="black" size="32") mdi-face-agent
          div(
            :class="$route.path === '/portal-of-education/support' ? 'active' : null"
          ).middle
            div
              | Поддержка
        li.d-flex.align-center
          div.left.gray
            v-icon(color="black" size="32") mdi-information
          div.middle
            div
              | О нас
        li(@click="exitSystem").d-flex.align-center
          div.left.gray
            v-icon(color="error" size="32") mdi-delete
          div.middle
            div
              | Выйти из системы
</template>

<script>
export default {
  name: "PortalOfEducationDrawer",
  created() {
    console.log(this.$route);
  },
  methods: {
    exitSystem() {
      localStorage.removeItem("user");
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      this.$store.commit("set_user", null);

      location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.drawer {
  &-root {
    width: 68px;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    border-right: 1px solid #d8d8d8;
    transition: all 0.2s linear;

    &:hover {
      width: 308px;
      transition: all 0.2s linear;
    }
  }

  &-container {
    padding-right: 6px;
    display: flex;
    height: 100%;
    overflow-y: scroll;
    flex-direction: column;
    width: 308px;

    &::-webkit-scrollbar {
      width: 0;
    }

    & > *:last-child {
      flex: 1 1;
    }
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  &-open-list {
    background-color: #d8d8d8;
    padding: 4px;
    border-radius: 4px;
  }
}

.price {
  & > * {
    font-size: 14px;
    color: black;

    &:last-child {
      margin-top: 2px;
    }
  }
}

.logo {
  width: 270px;
  height: 40px;

  & > * {
    width: 100%;
    height: 100%;
  }

  &-wrapper {
    padding: 14px;
  }
}

.left {
  width: 50px;
  justify-content: center;
}

.gray {
  background-color: #d8d8d8;
}

.middle {
  flex-direction: column;
  align-items: start;
  margin-right: auto;
  justify-content: center;

  & > * {
    font-size: 12px;
    transition: all 0.2s linear;
  }
}

.right {
  width: 50px;
  justify-content: center;
}

.avatar {
  position: relative;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 50%;

  &-icon {
    font-size: 46px !important;
  }
}

.green {
  background-color: #09ad40;
}

.yellow {
  background-color: yellow;
}

.user {
  &-name {
    font-weight: 600;
  }

  &-status {
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: 2px;
    right: 2px;
    box-shadow: 0 0 0 2px #fff;
    border-radius: 10px;
    background-color: #09ad40;
    z-index: 1;
  }
}

li {
  height: 54px;
  background: #fafafa;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  border-left: 1px solid #dadfe4;
  border-top: 1px solid #dadfe4;
  border-bottom: 1px solid #dadfe4;
  cursor: pointer;

  &:hover {
    transition: all 0.2s linear;

    & > .middle {
      & > * {
        color: var(--main-blue);
      }
    }
  }

  & > * {
    height: 100%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
  }
}

.active {
  & > * {
    color: var(--main-blue);
  }
}

.main-content {
  background-color: #f0f0f0;
  padding-left: 16px;
  padding-top: 88px;
  padding-bottom: 12px;
}
</style>
