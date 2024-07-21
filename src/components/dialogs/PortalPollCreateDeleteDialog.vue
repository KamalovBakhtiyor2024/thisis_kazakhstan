<template lang="pug">
v-dialog(v-model="local_open" width="500")
  v-card.card
</template>

<script>
export default {
  name: "PortalPollCreateDeleteDialog",
  props: {
    open: Boolean,
  },
  computed: {
    local_open: {
      get() {
        return this.open;
      },
      set(value) {
        this.$store.commit("set_poll_create_delete_dialog", value);
      },
    },
  },
};
</script>

<style scoped lang="scss"></style>
