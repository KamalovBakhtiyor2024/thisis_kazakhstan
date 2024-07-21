<template lang="pug">
div
  v-container.py-0
    h2(class="title mr-16").text-uppercase.mb-6 Мои опросы
    div(
      v-if="my_polls <= 0"
    ).progress.d-flex.flex-column.align-center.justify-center.mt-10
      v-progress-circular(
        indeterminate
        color="#1d64f2"
        :size="60"
      ).mb-4
      span Загрузка...
    div(
      v-if="my_polls.length > 0"
    ).polls.d-flex.flex-column.mt-10
      portal-my-polls-card(
        v-for="(poll, index) in my_polls_sliced"
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
import PortalMyPollsCard from "./PortalMyPollsCard.vue";

export default {
  name: "PortalMyPollsView",
  components: { PortalMyPollsCard },
  data() {
    return {
      page: 1,
      indexStartForSlice: 0,
      indexEndForSlice: 6,
      my_polls: [
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
      if (this.my_polls.length !== 6 && this.my_polls.length > 0) {
        if (this.my_polls.length % 6 !== 0) {
          return 1 + Math.floor(this.my_polls.length / 6);
        } else {
          return this.my_polls.length / 6;
        }
      } else {
        return 1;
      }
    },
    my_polls_sliced() {
      return this.my_polls.slice(
        this.indexStartForSlice,
        this.indexEndForSlice
      );
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
