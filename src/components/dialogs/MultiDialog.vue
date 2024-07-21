<template lang="pug">
div(class="multi-dialog" v-if="$store.state.multi_dialog")
  v-card(elevation="0" class="card")
    div
      div(
        class="line"
        :style="$store.state.multi_dialog_warning ? 'background-color: red;' : 'background-color: lime;'"
      )
      div(
        class="py-2 px-4 d-flex align-center flex-wrap font-weight-medium" 
        style="gap: 8px;"
      )
        font-awesome-icon(
          v-if="$store.state.multi_dialog_warning"
          style="color: red; margin-right: 4px;" 
          icon="fa-solid fa-radiation"
        )
        font-awesome-icon(
          v-if="$store.state.multi_dialog_complete"
          style="color: lime; margin-right: 4px;" 
          icon="fa-solid fa-check"
        )
        | {{ $store.state.multi_dialog_message }}
        div {{ time }}s
</template>

<script>
export default {
  name: "MultiDialog",
  data: () => ({
    time: 5,
  }),
  computed: {
    multi_dialog() {
      return this.$store.state.multi_dialog;
    },
  },
  watch: {
    multi_dialog(newValue) {
      newValue ? this.timeing() : this.timeing("clear");
    },
  },
  methods: {
    timeing(method) {
      const interval = setInterval(() => {
        if (this.time !== 0) {
          this.time -= 1;
        } else {
          clearInterval(interval);
          this.close_multi_dialog();
        }
      }, 750);

      switch (method) {
        case "clear":
          clearInterval(interval);
          this.time = 5;
          break;
      }
    },
    close_multi_dialog() {
      this.$store.commit("set_multi_dialog", false);
      this.$store.commit("set_multi_dialog_message", null);
      this.$store.commit("set_multi_dialog_complete", false);
      this.$store.commit("set_multi_dialog_warning", false);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  box-shadow: var(--shadow-2xl) !important;
  overflow: hidden;
}

.line {
  height: 4px;
  width: 0;
  border-radius: 20px;
  transform: translate(-10%);
  animation: line 5s ease-in-out forwards;
}

.multi-dialog {
  position: fixed;
  top: 102px;
  z-index: 120;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@keyframes line {
  from {
    width: 0;
  }

  to {
    width: 110%;
    transform: translate(0%);
  }
}
</style>
