<template lang="pug">
v-card(elevation="0").card
  div.card-header.d-flex.align-center
    div
    div
    div
  div.card-content.d-flex.align-center.flex-column
    div.top.d-flex.flex-column.justify-center.mb-2.px-6.py-6
      div.number.white--text.mb-2 {{ fact_number }}
      div.white--text.font-weight-medium {{ title }}
      div(
        @click="$router.push({ name: 'category', params: { category: post.category.link } })"
      ).category.text-uppercase
        div.white--text {{ $t(fact.category.name) }}
    div.card-content-texts.pa-4.py-0
      h2.font-weight-medium {{ description }}
  div.card-bottom.d-flex.align-center
    div
    div
      div.text-center {{ fact.date }}
    div
</template>

<script>
export default {
  name: "FactCard",
  props: {
    fact: Object,
  },
  data() {
    return {
      title: null,
      description: null,
    };
  },
  watch: {
    locale() {
      this.set_texts_for_lang();
    },
  },
  computed: {
    fact_number() {
      return `#${this.fact.number}`;
    },
    locale() {
      return this.$i18n.locale;
    },
  },
  created() {
    this.set_texts_for_lang();
  },
  methods: {
    set_texts_for_lang() {
      if (this.$i18n.locale === "ru") {
        this.description = this.fact.description_ru;
        this.title = this.fact.title_ru;
      } else if (this.$i18n.locale === "kz") {
        this.description = this.fact.description_kz;
        this.title = this.fact.title_kz;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.number {
  font-size: 6rem;
  line-height: 6rem;
}

.card {
  width: 100%;
  overflow: hidden;
  border-radius: 0 !important;
  background-color: transparent !important;
  cursor: pointer;

  &:hover {
    .card-content {
      background: #dedede;
    }

    .card-bottom {
      & > * {
        &:first-child {
          background: linear-gradient(
            -140deg,
            #dedede,
            #dedede 28.5px,
            #dedede 0,
            #dedede 32px,
            transparent 0
          );
        }

        &:nth-child(2) {
          background-color: #dedede;
        }

        &:last-child {
          background: linear-gradient(
            140deg,
            #dedede,
            #dedede 28.5px,
            #dedede 0,
            #dedede 32px,
            transparent 0
          );
        }

        &::before {
          background-color: #dedede;
        }
      }
    }
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
          #f5f5f5,
          #f5f5f5 28.5px,
          #f5f5f5 0,
          #f5f5f5 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: #f5f5f5;
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }

      &:nth-child(2) {
        width: calc(100% - 90px);
        background-color: #f5f5f5;
        position: relative;

        & > div {
          position: relative;
          top: -12px;
        }
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          140deg,
          #f5f5f5,
          #f5f5f5 28.5px,
          #f5f5f5 0,
          #f5f5f5 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: #f5f5f5;
          height: 4px;
          width: 25px;
          position: absolute;
        }
      }
    }
  }

  &-content {
    background-color: #f5f5f5;

    &-texts {
      height: 260px;
      overflow: hidden;
    }
  }

  &-header {
    height: 32px;
    position: relative;
    top: 12px;

    & > * {
      height: 100%;

      &:nth-child(2) {
        width: calc(100% - 90px);
        background-color: #f5f5f5;
      }

      &:last-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          40deg,
          #f5f5f5,
          #f5f5f5 28.5px,
          #f5f5f5 0,
          #f5f5f5 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          left: 0;
          background-color: #f5f5f5;
          height: 4px;
          width: 25px;
          position: absolute;
        }

        &::after {
          content: "";
          right: -25px;
          top: 0;
          height: 100%;
          z-index: 2;
          width: 45px;
          position: absolute;
          background: linear-gradient(
            -135deg,
            #fff,
            #fff 28.5px,
            #fff 0,
            #fff 32px,
            transparent 0
          );
        }
      }

      &:first-child {
        width: 45px;
        position: relative;
        background: linear-gradient(
          -45deg,
          #f5f5f5,
          #f5f5f5 28.5px,
          #f5f5f5 0,
          #f5f5f5 32px,
          transparent 0
        );

        &::before {
          content: "";
          top: 0;
          right: 0;
          background-color: #f5f5f5;
          height: 4px;
          width: 25px;
          position: absolute;
        }

        &::after {
          content: "";
          left: -25px;
          top: 0;
          height: 100%;
          z-index: 2;
          width: 45px;
          position: absolute;
          background: linear-gradient(
            135deg,
            #fff,
            #fff 28.5px,
            #fff 0,
            #fff 32px,
            transparent 0
          );
        }
      }
    }
  }
}

.top {
  max-height: 250px;
  width: 100%;
  height: 250px;
  position: relative;
  top: -20px;
  background-color: #273e47;
}

.category {
  position: absolute;
  bottom: -30px;
  z-index: 4;
  background-color: var(--main-blue);
  left: 50%;
  cursor: pointer;
  margin-right: -50%;
  transform: translate(-50%, -50%) skew(-25deg, 0deg);
  color: #fff;
  padding: 0.225em 0.85em;

  &:hover {
    & > div {
      text-decoration: underline;
    }
  }

  & > div {
    position: relative;
    transform: skew(25deg, 0deg);
  }
}

h2 {
  font-size: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  color: #000000de;
}

@media screen and (max-width: 1080px) {
  h2 {
    font-size: 20px;
  }

  .card-content-texts {
    max-height: 240px;
  }
}
</style>
