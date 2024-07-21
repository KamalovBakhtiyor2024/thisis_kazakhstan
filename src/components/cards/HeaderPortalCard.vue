<template lang="pug">
v-card(elevation="0").card
  div.card-header.d-flex.align-center
    div
    div
    div
  div.card-content.d-flex.align-center.flex-column.px-4
    div.card-title.text-center.text-uppercase.white--text 
      span.white--text {{ $t("users") }} 
      | {{ $t("in_system") }}
    font-awesome-icon(icon="fa-solid fa-user").mt-2
    div.card-temperature.white--text
      | 1100
    router-link(to="/portal-of-education").card-forecast-btn.text-decoration-none.mt-2
      div.text-center.text-uppercase.white--text
        | {{ $t("portal") }}
  div.card-bottom.d-flex.align-center
    div
    div
    div
</template>

<script>
export default {
  name: "HeaderPortalCard",
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
    color: #fff;
    padding: 0.45rem 1.6rem;
    background-color: #273e47;
    transform: skew(-25deg, 0deg);
    transition: border 0.2s ease-in-out;
    border-right: 4px solid #273e47;
    max-width: 250px;

    &:hover {
      border-right: 4px solid yellow;
      transition: border 0.2s ease-in-out;
    }

    & > div {
      transform: skew(25deg, 0deg);
      position: relative;
      right: -4px;
    }
  }

  &-content {
    background-image: url("@/assets/backgrounds/services-views.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
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
          #112aba,
          #112aba 28.5px,
          #112aba 0,
          #112aba 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: #112aba;
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }

      &:nth-child(2) {
        width: calc(100% - 90px);
        background-image: url("@/assets/backgrounds/services-views.jpg");
        background-position: left bottom;
        background-repeat: no-repeat;
        background-size: 160%;
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          140deg,
          #255bdf,
          #255bdf 28.5px,
          #255bdf 0,
          #255bdf 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: #255bdf;
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
        background-image: url("@/assets/backgrounds/services-views.jpg");
        background-position: left top;
        background-repeat: no-repeat;
        background-size: 160%;
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          40deg,
          #255bdf,
          #255bdf 28.5px,
          #255bdf 0,
          #255bdf 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: #255bdf;
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
          #112aba,
          #112aba 28.5px,
          #112aba 0,
          #112aba 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: #112aba;
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }
    }
  }
}
</style>
