<template lang="pug">
div.root
  portal-of-education-drawer
  div
    main
      router-view
</template>

<script>
// components
import PortalOfEducationDrawer from "@/components/drawers/PortalOfEducationDrawer";

export default {
  name: "ProfileView",
  components: {
    PortalOfEducationDrawer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push("/signin");
    }
  },
};
</script>

<style scoped lang="scss">
.root {
  padding-left: 68px;
}

main {
  padding-top: 126px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
}

@media screen and (max-width: 600px) {
  main {
    padding-left: 0;
    padding-right: 0;
    padding-top: 96px;
    padding-bottom: 20px;
  }
}
</style>
