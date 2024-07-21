<template lang="pug">
section(id="lookingFor").looking-for.mb-6
  v-container
    home-base-info.base-info
    div.top
      h2.text-center.text-uppercase {{ $t("looking_for_title") }}
    div.content.mt-2
      ul.pa-0.d-flex.align-center.flex-wrap
        li
          div.box-link.d-flex.flex-column
            div.d-flex.align-center.justify-center
              div.box-link-image
                img(src="@/assets/images/toolbox.png" alt="toolbox")
            div.text-center
              router-link.white--text.box-link-text-link(to="/toolbox") КАЗАХСТАН ИНСТРУМЕНТАРИЙ
                v-icon(size="12px").box-link-icon.white--text mdi-open-in-new
        li
          div.box-link.d-flex.flex-column
            div.d-flex.align-center.justify-center
              div.box-link-image
                img(src="@/assets/images/looking-for-laptop.png" alt="toolbox")
            div.text-center
              router-link.white--text.box-link-text-link(to="/toolbox") ИНФОРМАЦИЯ ОБ УЧЕБЕ И РАБОТЕ
                v-icon(size="12px").box-link-icon.white--text mdi-open-in-new
        li
          div.box-link.d-flex.flex-column
            div.d-flex.align-center.justify-center
              div.box-link-image
                img(src="@/assets/images/looking-for-graph.png" alt="toolbox")
            div.text-center
              router-link.white--text.box-link-text-link(to="/toolbox") БИЗНЕС И ИНВЕСТИЦИОННАЯ ИНФОРМАЦИЯ
                v-icon(size="12px").box-link-icon.white--text mdi-open-in-new
        li
          div.box-link.d-flex.flex-column
            div.d-flex.align-center.justify-center
              div.box-link-image
                img(src="@/assets/images/looking-for-house.png" alt="toolbox")
            div.text-center
              router-link.white--text.box-link-text-link(to="/toolbox") ИНФОРМАЦИЯ О ГОСУДАРСТВЕННЫХ УСЛУГАХ
                v-icon(size="12px").box-link-icon.white--text mdi-open-in-new
        li
          div.box-link.d-flex.flex-column
            div.d-flex.align-center.justify-center
              div.box-link-image
                img(src="@/assets/images/looking-for-briefcase.png" alt="toolbox")
            div.text-center
              router-link.white--text.box-link-text-link(to="/toolbox") ТУРИСТИЧЕСКАЯ ИНФОРМАЦИЯ
                v-icon(size="12px").box-link-icon.white--text mdi-open-in-new
</template>

<script>
// Components
import HomeBaseInfo from "./HomeBaseInfo.vue";

export default {
  name: "LookingFor",
  components: { HomeBaseInfo },
};
</script>

<style scoped lang="scss">
.looking-for {
  padding-top: 62px;
}

li {
  list-style: none;
}

.base-info {
  position: relative;
  top: -24px;
}

.content > ul {
  gap: 8px;

  & > li {
    flex: 1 1;
    width: 100%;
    cursor: pointer;
  }
}

.box-link {
  height: 170px;

  & > * {
    &:first-child {
      background-color: #dfe4e6;
      height: 100%;
    }

    &:last-child {
      background: #273e47;
      padding: 10px 8px;
      padding-right: 18px;
    }
  }

  &-text-link {
    position: relative;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
  }

  &-icon {
    position: absolute;
    right: -14px;
    bottom: 6px;
  }

  &-image {
    width: 110px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      height: 100%;
      width: 100%;
    }
  }
}

.top {
  background: #dfe4e6;
  padding: 8px;
}

h2 {
  font-size: 32px;
}

@media screen and (max-width: 1080px) {
  .content > ul {
    flex-direction: column !important;
  }

  .looking-for {
    padding-top: 58px;
  }
}

@media screen and (max-width: 600px) {
  .looking-for {
    padding-top: 220px;
  }
}
</style>
