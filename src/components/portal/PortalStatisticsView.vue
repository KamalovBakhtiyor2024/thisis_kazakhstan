<template lang="pug">
div
  v-container.py-0
    h2(class="title mr-16").text-uppercase.mb-6 Cтатистика
    div.main.d-flex.flex-wrap
      portal-statistics-card(:data="user_statistic.polls")
      portal-statistics-card(:data="user_statistic.responses")
      portal-statistics-card(:data="user_statistic.tests")
      portal-statistics-card(:data="user_statistic.quizzes")
</template>

<script>
// Components
import PortalStatisticsCard from "./PortalStatisticsCard.vue";

export default {
  name: "PortalStatisticsView",
  components: { PortalStatisticsCard },
  data() {
    return {
      user_statistic: {
        polls: {
          more: null,
          design: {
            color: "#1d64f2",
          },
          title_ru: "ОПРОСЫ",
          title_kz: "ОПРОСЫ",
          name: "polls",
          amount: "124",
          series: [
            {
              name: "Охват",
              data: [
                {
                  x: "20 сентября",
                  y: 12,
                },
                {
                  x: "21 сентября",
                  y: 16,
                },
                {
                  x: "22 сентября",
                  y: 23,
                },
                {
                  x: "23 сентября",
                  y: 43,
                },
                {
                  x: "24 сентября",
                  y: 40,
                },
                {
                  x: "25 сентября",
                  y: 32,
                },
                {
                  x: "26 сентября",
                  y: 14,
                },
              ],
            },
          ],
        },
        responses: {
          more: null,
          design: {
            color: "#ffa500",
          },
          title_ru: "ЗАЯВКИ",
          title_kz: "ЗАЯВКИ",
          name: "responses",
          amount: "456",
          series: [
            {
              name: "Охват",
              data: [
                {
                  x: "20 сентября",
                  y: 12,
                },
                {
                  x: "21 сентября",
                  y: 16,
                },
                {
                  x: "22 сентября",
                  y: 23,
                },
                {
                  x: "23 сентября",
                  y: 43,
                },
                {
                  x: "24 сентября",
                  y: 19,
                },
                {
                  x: "25 сентября",
                  y: 32,
                },
                {
                  x: "26 сентября",
                  y: 14,
                },
              ],
            },
          ],
        },
        tests: {
          more: null,
          design: {
            color: "#e6a6c6",
          },
          title_ru: "ТЕСТЫ",
          title_kz: "ТЕСТЫ",
          name: "tests",
          amount: "182",
          series: [
            {
              name: "Охват",
              data: [
                {
                  x: "20 сентября",
                  y: 48,
                },
                {
                  x: "21 сентября",
                  y: 16,
                },
                {
                  x: "22 сентября",
                  y: 23,
                },
                {
                  x: "23 сентября",
                  y: 43,
                },
                {
                  x: "24 сентября",
                  y: 40,
                },
                {
                  x: "25 сентября",
                  y: 32,
                },
                {
                  x: "26 сентября",
                  y: 14,
                },
              ],
            },
          ],
        },
        quizzes: {
          more: null,
          design: {
            color: "#be2ed6",
          },
          title_ru: "КВИЗЫ",
          title_kz: "КВИЗЫ",
          name: "quizzes",
          amount: "258",
          series: [
            {
              name: "Охват",
              data: [
                {
                  x: "20 сентября",
                  y: 12,
                },
                {
                  x: "21 сентября",
                  y: 56,
                },
                {
                  x: "22 сентября",
                  y: 23,
                },
                {
                  x: "23 сентября",
                  y: 43,
                },
                {
                  x: "24 сентября",
                  y: 40,
                },
                {
                  x: "25 сентября",
                  y: 40,
                },
                {
                  x: "26 сентября",
                  y: 14,
                },
              ],
            },
          ],
        },
      },
    };
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

.main {
  gap: 24px;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 28px !important;
  }
}
</style>
