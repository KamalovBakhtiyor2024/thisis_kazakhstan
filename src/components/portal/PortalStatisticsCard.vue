<template lang="pug">
v-card.card.d-flex.justify-space-between.pt-6.px-2
  div.pl-3
    div.amount Всего:
    div.amount {{ data.amount }}
    div(v-if="data.more !== null" style="gap: 8px;").d-flex.align-center.mt-2
      div.item
        div(
          v-for="(item, index) in data.more" 
          :key="index" 
          :style="item[0].startsWith('-') ? 'color: red;' : null"
        ) {{ item[0] }}
      div.item
        div(v-for="(item, index) in data.more" :key="index") {{ item[1] }}
  div
    div.custom-title.text-right.name.text-uppercase.pr-3 {{ data.title_ru }}
    apex-charts(
      v-if="data.series !== null"
      width="100%" 
      height="150" 
      type="area" 
      :options="options" 
      :series="data.series"
    )
    div(v-else).null
</template>

<script>
export default {
  name: "PortalStatisticsCard",
  props: {
    data: Object,
  },
  data() {
    return {
      options: {
        markers: {
          colors: [this.data.design.color],
        },
        fill: {
          colors: [this.data.design.color],
        },
        chart: {
          id: this.data.name,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 47.8%;
  border-radius: 15px !important;
  box-shadow: 0 0 8px 0 #ededed !important;
  gap: 12px;
  height: 200px;

  & > * {
    flex: 2;

    &:first-child {
      flex: 1;
    }
  }
}

.item {
  font-size: 12px;
}

.null {
  height: 150px;
}

.custom-title {
  margin-bottom: auto;
}

.amount {
  font-size: 1.8rem;
}

.name {
  font-size: 14px;
  font-weight: 500;
  height: 32px;
}

@media screen and (max-width: 900px) {
  .amount {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;

    & > * {
      flex: 1 1 60%;

      &:first-child {
        flex: 1 1 40%;
      }
    }
  }

  .amount {
    font-size: 1.5rem;
  }
}
</style>
