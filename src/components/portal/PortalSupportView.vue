<template lang="pug">
div
  v-container.py-0
    h2(class="title mr-16").text-uppercase Поддержка
    v-card(class="card" max-width="1115").mt-6
      div(class="card-top")
      div(class="card-content")
        h2(class="card-title") Контакты
        div(class="card-text mb-6")
          | По всем вопросам можно обращаться 
          span @bahtierkamalov21
        div(class="card-text")
          | Электронная почта - 
          span bahtierkamalov21@gmail.com
</template>

<script>
export default {
  name: "PortalSupportView",
};
</script>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 36px !important;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #121133 !important;
}

.card {
  background: #ffffff;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.07) !important;
  border-radius: 15px !important;
  position: relative;

  &-top {
    width: 100%;
    height: 110px;
    background: var(--weather-color);
    border-radius: 15px 15px 0 0 !important;
    overflow: hidden;
    position: relative;

    &-icon {
      position: absolute;
      right: 44px;
      top: 22px;
      width: 114px;
      height: 114px;
    }
  }

  &-content {
    padding: 52px 90px !important;
  }

  &-title {
    font-weight: 600;
    font-size: 30px !important;
    line-height: 36px;
    margin-bottom: 40px;
    color: #232323;
  }

  &-text {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #232323;
  }
}

@media screen and (max-width: 900px) {
  .card {
    &-content {
      padding: 40px 40px !important;
    }

    &-title {
      margin-bottom: 24px;
    }
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 28px !important;
  }

  .card {
    &-content {
      padding: 40px 24px !important;
    }

    &-text {
      font-size: 16px;
    }
  }
}
</style>
