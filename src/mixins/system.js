const system = {
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.commit("set_user", null);

      location.reload();
    },
    call_multi_dialog(state, value, type) {
      this.$store.commit("set_multi_dialog", state);
      this.$store.commit("set_multi_dialog_message", value);

      if (type === "complete") {
        this.$store.commit("set_multi_dialog_complete", true);
      } else if (type === "warning") {
        this.$store.commit("set_multi_dialog_warning", true);
      }
    },
  },
};

export default system;
