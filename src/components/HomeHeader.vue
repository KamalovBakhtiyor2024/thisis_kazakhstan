<template lang="pug">
header
  v-container.container-pd.d-flex.flex-column.align-center.justify-center
    h1.white--text.text-uppercase.text-center {{ $t("kazakhstan_respublic") }}
    h2.text-uppercase.text-center.mt-2 {{ $t("header_subtitle") }}
    div.weather.d-flex.align-center.mt-10
      weather-card
      header-portal-card
</template>

<script>
// Components
import WeatherCard from "./cards/WeatherCard.vue";
import HeaderPortalCard from "./cards/HeaderPortalCard.vue";

export default {
  name: "HomeHeader",
  components: { WeatherCard, HeaderPortalCard },
};
</script>

<style scoped lang="scss">
header {
  position: relative;
  min-height: 600px;
  display: grid;
  background-image: url("../assets/backgrounds/mountain-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(../assets/images/raster.svg);
    background-size: 4px 4px;
  }
}

.weather {
  width: 800px;
  gap: 12px;
  flex-direction: row;
}

.container-pd {
  height: 100%;
}

h1 {
  position: relative;
  z-index: 2;
}

h2 {
  position: relative;
  color: #fff;
  z-index: 2;
  max-width: 920px;
  font-size: 16px;
}

@media screen and (max-width: 1080px) {
  h2 {
    max-width: 600px;
  }

  .weather {
    width: 320px;
    margin-top: 24px !important;
    flex-direction: column;
  }

  header {
    min-height: 820px;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 24px;
  }

  header {
    min-height: 850px;
  }

  h2 {
    font-size: 0.8rem;
    padding: 0 12px;
  }
}
</style>
