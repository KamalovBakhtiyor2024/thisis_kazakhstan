<template lang="pug">
div
  main
    section
      v-container.py-16
        h1.text-center NATIONAL WEATHER FORECAST
    section.weather-forecast      
</template>

<script>
export default {
  name: "NationalWeatherForecastView",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss"></style>
