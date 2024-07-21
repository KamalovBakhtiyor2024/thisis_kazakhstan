<template lang="pug">
v-card.card
  div.d-flex.align-center.justify-space-between.py-4.px-5
    div
      div.custom-title.font-weight-medium {{ poll.title }}
    div
      div.description.ma-auto {{ poll.small_description }}
    div
      v-btn(elevation="0")
        | Пройти опрос
  div
    div.date.text-center.py-4.px-5 {{ poll.date }}
</template>

<script>
export default {
  name: "PortalPollsCard",
  props: {
    poll: Object,
  },
};
</script>

<style scoped lang="scss">
.card {
  background: #fff;
  border-radius: 15px !important;
  box-shadow: 0 0 8px 0 #ededed !important;
  overflow: hidden;

  & > *:first-child {
    & > * {
      &:first-child {
        flex: 1 1;
      }
    }
  }
}

.custom-title {
  color: #000000de;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.date {
  background-color: var(--main-blue);
  color: #fff;
  font-weight: 500;
}

.description {
  color: #000000de;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  max-width: calc(100% - 24px);
}
</style>
