<template lang="pug">
nav(
  :class="fixedOn"
).d-flex.align-center
  div.ornaments.d-flex.align-center.justify-center
    div
      img(src="@/assets/backgrounds/ornament.png")
    div
      img(src="@/assets/backgrounds/ornament.png")
    div
      img(src="@/assets/backgrounds/ornament.png")
    div
      img(src="@/assets/backgrounds/ornament.png")
  v-container.wrapper
    div.d-flex.align-center.justify-space-between
      div.logo-wrapper
        router-link(to="/").logo
          img(src="@/assets/thisiskazakhstan_logo_white.svg" alt="logo")
      div(
        v-if="$store.state.categories.length > 0"
      ).links.align-center.ml-auto.mr-6
        div(
          v-for="(category, index) in $store.state.categories"
          :class="$route.params.category === category.link ? 'active' : null"
          @click="handleNavigation(category.link)"
        ).link.text-uppercase.text-decoration-none 
          | {{ $t(category.link) }}
      div.moduls.align-center.ml-auto
        div(
          @click="open_language_dialog"
        ).language.d-flex.align-center
          div.language-wrapper.d-flex.align-center.justify-center
            flag(:iso="$i18n.locale").language-wrapper-icon
          div.text-uppercase.language-text {{ language }}
        div.search.d-flex.align-center.justify-center.ml-4
          font-awesome-icon(icon="fa-solid fa-magnifying-glass").search-icon
      div.menu-wrapper.ml-6
        div(
          @click="menu = !menu" 
          :class="menu ? 'menu-active' : null"
        ).menu-icon
          span
          span
          span
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    open_language_dialog() {
      this.$store.commit("set_language_dialog", true);
    },
    handleNavigation(category) {
      if (this.$route.params.category !== category) {
        this.$router.push({ name: "category", params: { category: category } });
      }
    },
  },
  computed: {
    fixedOn() {
      if (
        this.$route.path !== "/portal-of-education" &&
        this.$route.path !== "/portal-of-education/" &&
        this.$route.path !== "/portal-of-education/polls" &&
        this.$route.path !== "/portal-of-education/responses" &&
        this.$route.path !== "/portal-of-education/statistics" &&
        this.$route.path !== "/portal-of-education/support" &&
        this.$route.path !== "/portal-of-education/polls-create" &&
        this.$route.path !== "/portal-of-education/my-polls"
      ) {
        return null;
      } else {
        return "fixed";
      }
    },
    language() {
      if (this.$i18n.locale === "ru") {
        return "Русский";
      } else if (this.$i18n.locale === "kz") {
        return "Қазақша";
      } else {
        return "Қазақша";
      }
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
  z-index: 100;
  box-shadow: 0 0 2.5rem rgba(39, 62, 71, 0.05);

  &::before {
    content: "";
    position: absolute;
    background-color: var(--main-blue);
    transform: skew(-25deg, 0deg);
    height: 100%;
    width: 25%;
    left: -10%;
    top: 0;
    z-index: 2;
  }
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.menu {
  &-wrapper {
    display: none;
  }

  &-active {
    & > *:nth-child(2)::before {
      left: 20%;
    }

    & > *:last-child::before {
      left: 40%;
    }
  }

  &-icon {
    display: none;
    position: relative;
    width: 56px;
    height: 46px;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;

    & > * {
      height: 10px;
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 2px;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.2s linear;
        border-radius: 2px;
        background-color: var(--main-blue);
        box-shadow: 0px 7px 17px -1px rgba(29, 100, 242, 0.34);
      }
    }

    &:hover {
      & > *:nth-child(2)::before {
        left: 20%;
      }

      & > *:last-child::before {
        left: 40%;
      }
    }
  }
}

.wrapper {
  position: relative;
  z-index: 2;
}

.ornaments {
  position: absolute;

  & > div {
    height: 74px;

    & > img {
      height: 100%;
    }
  }
}

.logo {
  width: 266px;
  height: 52px;
  position: relative;
  display: flex;
  left: -20px;

  &-wrapper {
    margin-right: 24px;
  }

  & > img {
    height: 100%;
    width: 100%;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: var(--main-blue);
    transform: skew(-25deg, 0deg);
    height: calc(100% + 28px);
    width: 300px;
    left: -20px;
    border-right: 4px solid yellow;
    top: -14px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: var(--main-blue);
    transform: skew(-25deg, 0deg);
    height: calc(100% + 24px);
    width: 20vw;
    left: -20vw;
    top: -12px;
  }
}

.links {
  gap: 16px;
  display: flex;
}

.link {
  font-size: 12px;
  color: rgba(39, 62, 71, 0.925);
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--main-blue);
    transition: color 0.2s ease-in-out;
  }
}

.active {
  color: var(--main-blue);
}

.search {
  background-color: #fff;
  transform: skew(-25deg, 0deg);
  cursor: pointer;
  padding: 10px 16px;
  position: relative;
  border-right: 4px solid var(--main-blue);
  transition: border 0.2s ease-in-out;

  &:hover {
    transition: border 0.2s ease-in-out;
    border-color: yellow;
  }

  &-icon {
    transform: skew(25deg, 0deg);
  }
}

.moduls {
  margin-right: 10px;
  display: flex;
}

.language {
  box-shadow: 0 4px 54px hsla(0, 0%, 65%, 0.21);
  border-radius: 50px;
  color: rgba(39, 62, 71, 0.925);
  padding-right: 12px;
  background-color: #fff;
  cursor: pointer;
  gap: 8px;
  position: relative;

  &:hover {
    transition: border 0.2s ease-in-out;

    &::before {
      border-color: yellow;
    }
  }

  &::before {
    content: "";
    position: absolute;
    height: 38px;
    width: 40px;
    transform: skew(-25deg, 0deg);
    background-color: #fff;
    right: -10px;
    border-right: 4px solid var(--main-blue);
    top: 0;
    transition: border 0.2s ease-in-out;
  }

  &-wrapper {
    border-radius: 50%;
    padding: 8px;
    border-right: 2px solid #f5f5f5;

    &-icon {
      font-size: 22px;
      border-radius: 50%;
    }
  }

  &-text {
    margin-top: 2px;
    position: relative;
    z-index: 2;
    font-size: 14px;
    font-weight: 600;
  }
}

@media screen and (max-width: 1080px) {
  .links {
    display: none !important;
  }

  .menu {
    &-wrapper {
      display: block;
    }

    &-icon {
      display: flex;
    }
  }
}

@media screen and (max-width: 900px) {
  .moduls {
    display: none !important;
  }

  .menu-wrapper {
    margin-left: 0 !important;
  }

  .logo-wrapper {
    margin-right: 0;
  }
}

@media screen and (min-width: 2400px) {
  nav {
    &::before {
      width: 30%;
    }
  }
}

@media screen and (min-width: 4000px) {
  nav {
    &::before {
      width: 45% !important;
    }
  }
}
</style>
