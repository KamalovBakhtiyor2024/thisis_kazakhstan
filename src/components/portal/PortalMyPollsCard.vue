<template lang="pug">
v-card.card
  div.d-flex.align-center.justify-space-between.py-4.px-5
    div
      div.custom-title.font-weight-medium {{ poll.title }}
    div
      div.description.ma-auto {{ poll.small_description }}
    div(style="gap: 12px;").d-flex.align-center
      div.btn
        v-icon mdi-cog
      div.btn
        v-icon(color="error") mdi-delete
  div
    div.date.text-center.py-4.px-5 {{ poll.date }}
</template>

<script>
export default {
  name: "PortalMyPollsCard",
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
        max-width: 280px;
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

.btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid #ededed;
  border-radius: 4px !important;
  overflow: hidden;
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
