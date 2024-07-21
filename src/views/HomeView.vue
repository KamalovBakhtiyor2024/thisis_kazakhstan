<template lang="pug">
div
  home-header
  main
    the-posts(category="all").the-posts.mb-8
    looking-for
</template>

<script>
// Components
import HomeHeader from "@/components/HomeHeader.vue";
import ThePosts from "@/components/ThePosts.vue";
import LookingFor from "@/components/LookingFor.vue";

export default {
  name: "HomeView",
  components: { HomeHeader, ThePosts, LookingFor },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
.the-posts {
  top: -68px;
  position: relative;
}
</style>
