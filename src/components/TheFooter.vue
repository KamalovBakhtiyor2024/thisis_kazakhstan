<template lang="pug">
footer(id="footer")
  v-container.py-10.pb-6
    div.container-pd.d-flex.flex-wrap
      div 
        router-link(to="/").logo
          v-img(src="@/assets/thisiskazakhstan_logo_white.svg")
      div(style="gap: 12px;").d-flex.flex-column
        div
          router-link(
            to="/portal-of-education"
          ).text-uppercase.text-decoration-none.white--text.font-weight-medium.portal-link
            | Портал для образовательных учреждений
            v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text 
              | mdi-bookshelf
        div
          router-link(
            to="/national-weather-forecast"
          ).text-uppercase.text-decoration-none.white--text.font-weight-medium.portal-link
            | Национальный прогноз погоды
            v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text 
              | mdi-weather-cloudy
      div
        ul.d-flex.flex-column.pa-0
          li
            router-link(to="/faq").text-decoration-none.link.white--text FAQ
              v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text mdi-arrow-right-bold-circle
          li
            router-link(to="/contacts").text-decoration-none.link.white--text КОНТАКТЫ
              v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text mdi-arrow-right-bold-circle
          li
            router-link(to="/about-us").text-decoration-none.link.white--text О НАС
              v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text mdi-arrow-right-bold-circle
          li
            router-link(to="/accessibility-statement").text-decoration-none.link.white--text ЗАЯВЛЕНИЕ О ДОСТУПНОСТИ
              v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text mdi-arrow-right-bold-circle
          li
            router-link(to="/learn-more-about-cookies-on-thisisfinland-fi").text-decoration-none.link.white--text УЗНАЙТЕ БОЛЬШЕ О ФАЙЛАХ COOKIE НА THISISKAZAKHSTAN.KZ
              v-icon(size="16px" style="margin-left: 4px;").link-icon.white--text mdi-arrow-right-bold-circle 
    div.copyright.text-center.mt-8
      | Подготовлено Министерством иностранных дел, Департаментом коммуникаций © 1995 - 2023
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped lang="scss">
footer {
  background-color: #333333;
  background-image: url("../assets/backgrounds/symbol.png");
  background-position: top right;
  background-repeat: no-repeat;
  padding: 0 2px;
}

.link {
  font-weight: 600;
  font-size: 12px;
  position: relative;

  &:hover {
    text-decoration: underline !important;
  }

  &-icon {
    position: absolute;
    top: 50%;
    transform: translate(-20%, -50%);
    right: -24px;
  }
}

.portal-link {
  font-size: 14px;
  position: relative;

  &:hover {
    text-decoration: underline !important;
  }

  & > .link-icon {
    top: inherit;
    bottom: 1px;
    right: -20px;
    transform: inherit;
  }
}

li {
  list-style: none;
}

.container-pd {
  gap: 24px;

  & > * {
    flex: 1 1;

    &:last-child {
      flex: 2;
      text-align: right;
      padding-right: 20px;
    }
  }
}

.logo {
  width: 200px;
  display: block;
  height: 52px;
  position: relative;
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

@media screen and (max-width: 900px) {
  .container-pd {
    flex-direction: column !important;
  }
}

@media screen and (max-width: 600px) {
  .copyright {
    font-size: 12px;
  }
}
</style>
