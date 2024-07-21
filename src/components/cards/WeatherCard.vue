<template lang="pug">
v-card(elevation="0").card
  div.card-header.d-flex.align-center
    div
    div
    div
  div.card-content.d-flex.align-center.flex-column.px-4
    div.card-title.text-center.text-uppercase 
      span {{ $t("taraz") }} 
      | {{ $t("now") }}
    font-awesome-icon(icon="fa-solid fa-cloud").mt-2
    div.card-temperature
      | 9°C
    router-link(to="/national-weather-forecast").card-forecast-btn.text-decoration-none.mt-2
      div.text-center.text-uppercase.white--text
        | {{ $t("national_weather_report") }}
  div.card-bottom.d-flex.align-center
    div
    div
    div
</template>

<script>
export default {
  name: "WeatherCard",
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  overflow: hidden;
  border-radius: 0 !important;
  background-color: transparent !important;

  &-title {
    & > span {
      font-weight: 600;
    }
  }

  &-temperature {
    font-size: 32px;
  }

  &-forecast-btn {
    font-size: 12px;
    font-weight: 500;
    background-color: #273e47;
    color: #fff;
    padding: 0.45rem 1.6rem;
    transform: skew(-25deg, 0deg);
    transition: border 0.2s ease-in-out;
    border-right: 4px solid #273e47;
    max-width: 230px;

    &:hover {
      border-right: 4px solid var(--main-blue);
      transition: border 0.2s ease-in-out;
    }

    & > div {
      transform: skew(25deg, 0deg);
      position: relative;
      right: -4px;
    }
  }

  &-content {
    background-color: var(--weather-color);
    color: #273e47;
  }

  &-bottom {
    height: 20px;

    & > * {
      height: 100%;

      &:first-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          -140deg,
          var(--weather-color),
          var(--weather-color) 28.5px,
          var(--weather-color) 0,
          var(--weather-color) 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: var(--weather-color);
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }

      &:nth-child(2) {
        width: calc(100% - 90px);
        background-color: var(--weather-color);
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          140deg,
          var(--weather-color),
          var(--weather-color) 28.5px,
          var(--weather-color) 0,
          var(--weather-color) 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: var(--weather-color);
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }
    }
  }

  &-header {
    height: 20px;

    & > * {
      height: 100%;

      &:nth-child(2) {
        width: calc(100% - 90px);
        background-color: var(--weather-color);
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          40deg,
          var(--weather-color),
          var(--weather-color) 28.5px,
          var(--weather-color) 0,
          var(--weather-color) 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: var(--weather-color);
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }

      &:first-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          -45deg,
          var(--weather-color),
          var(--weather-color) 28.5px,
          var(--weather-color) 0,
          var(--weather-color) 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: var(--weather-color);
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }
    }
  }
}
</style>
