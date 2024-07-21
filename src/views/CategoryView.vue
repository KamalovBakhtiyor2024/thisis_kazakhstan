<template lang="pug">
div
  main
    header
      v-container.pt-16.pb-6
        h1.text-center.text-uppercase {{ $t(category[0].link) }}
        div(
          :style="'background-color:' + category[0].color + ';'"
        ).line.ma-auto.mt-4
    section
      the-posts(:category="category[0].name")
</template>

<script>
// Components
import ThePosts from "@/components/ThePosts.vue";

export default {
  name: "CategoryView",
  components: { ThePosts },
  computed: {
    route_category() {
      return this.$route.params.category;
    },
    category() {
      return this.$store.state.categories.filter(
        (item) => item.link === this.route_category
      );
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #273e47;
  font-weight: 600;
}

.line {
  width: 96px;
  height: 10px;
}
</style>
