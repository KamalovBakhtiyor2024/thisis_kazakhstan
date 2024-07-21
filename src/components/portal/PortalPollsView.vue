<template lang="pug">
div
  v-container.py-0
    h2(class="title mr-16").text-uppercase.mb-6 Опросы
    div.bar.d-flex.align-center.justify-space-between
      div
      div
        v-btn(
          v-if="$store.state.user.role === 2"
          @click="$router.push('/portal-of-education/polls-create')"
          elevation="0" 
          large
        ).poll-btn
          | Создать опрос
          v-icon(right) mdi-pencil-plus
    div(
      v-if="polls <= 0"
    ).progress.d-flex.flex-column.align-center.justify-center.mt-10
      v-progress-circular(
        indeterminate
        color="#1d64f2"
        :size="60"
      ).mb-4
      span Загрузка...
    div(
      v-if="polls.length > 0"
    ).polls.d-flex.flex-column.mt-10
      portal-polls-card(
        v-for="(poll, index) in polls_sliced"
        :key="index"
        :poll="poll"
      )
    v-pagination(
      v-model="page" 
      :length="pagePaginationLength" 
      :total-visible="6" 
      circle
    ).mt-10
</template>

<script>
// Components
import PortalPollsCard from "./PortalPollsCard.vue";

export default {
  name: "PortalPollsView",
  components: { PortalPollsCard },
  data() {
    return {
      page: 1,
      indexStartForSlice: 0,
      indexEndForSlice: 6,
      polls: [
        {
          id: 21,
          title: "Опрос учащихся 10-11 классов Жамбыльской области",
          small_description:
            "Опрос среди учащихся старших классов Жамбыльской области, города Тараз",
          date: "2023-11-13",
        },
      ],
    };
  },
  computed: {
    pagePaginationLength() {
      if (this.polls.length !== 6 && this.polls.length > 0) {
        if (this.polls.length % 6 !== 0) {
          return 1 + Math.floor(this.polls.length / 6);
        } else {
          return this.polls.length / 6;
        }
      } else {
        return 1;
      }
    },
    polls_sliced() {
      return this.polls.slice(this.indexStartForSlice, this.indexEndForSlice);
    },
  },
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

.progress {
  min-height: 240px;
}

.poll {
  &-btn {
    background-color: #fff !important;
    // border: 2px solid #dadfe4;
    font-weight: 600;
    border-radius: 15px !important;
    overflow: hidden;
    box-shadow: 0 0 8px 0 #ededed !important;
  }

  &s {
    gap: 24px;
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 28px !important;
  }
}
</style>
