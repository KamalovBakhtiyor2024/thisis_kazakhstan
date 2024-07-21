<template lang="pug">
v-dialog(v-model="open_local" width="100%" fullscreen)
  div.wrapper
    div.d-flex.align-center.justify-end
      v-icon(
        @click="close_language_dialog"
      ).icon.white--text mdi-close
    div.languages.d-flex.flex-column
      ul.pa-0
        li
          a(
            href="javascript:void(0)"
            @click="set_language('ru')"
          ).language.text-uppercase.text-decoration-none.text-center Русский
        li
          a(
            href="javascript:void(0)"
            @click="set_language('kz')"
          ).language.text-uppercase.text-decoration-none.text-center ҚазаҚша
</template>

<script>
export default {
  name: "LanguageDialog",
  props: {
    open: Boolean,
  },
  methods: {
    close_language_dialog() {
      this.$store.commit("set_language_dialog", false);
    },
    set_language(lang) {
      location.hash = lang;
      location.reload();
    },
  },
  computed: {
    open_local: {
      get() {
        return this.open;
      },
      set(value) {
        this.$store.commit("set_language_dialog", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  height: 100vh;
}

li {
  list-style: none;
}

.language {
  width: 100%;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  display: block;
  padding: 12px;

  &:hover {
    background: #273e47;
  }
}

.icon {
  cursor: pointer;
  margin: 24px;
  font-size: 52px !important;
}
</style>
