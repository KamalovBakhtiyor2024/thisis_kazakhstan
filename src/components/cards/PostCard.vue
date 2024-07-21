<template lang="pug">
v-card(elevation="0").card
  div.card-header.d-flex.align-center
    div
    div
    div
  div.card-content.d-flex.align-center.flex-column
    div(:style="'background-image: url(' + post.image + ')'").image.mb-2
      div(
        @click="$router.push({ name: 'category', params: { category: post.category.link } })"
      ).category.text-uppercase
        div.white--text {{ $t(post.category.link) }}
      //- v-img(:src="post.image")
    div.card-content-texts.pa-4.py-0
      h2.text-center.mb-3 {{ title }}
      p.description.ma-0 {{ small_description }}
  div.card-bottom.d-flex.align-center
    div
    div 
      div.text-center {{ post.date }}
    div
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
  data() {
    return {
      small_description: null,
      title: null,
    };
  },
  watch: {
    locale() {
      this.set_texts_for_lang();
    },
  },
  computed: {
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
        this.small_description = this.post.small_description_ru;
        this.title = this.post.title_ru;
      } else if (this.$i18n.locale === "kz") {
        this.small_description = this.post.small_description_kz;
        this.title = this.post.title_kz;
      }
    },
  },
};
</script>

<style scoped lang="scss">
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
        position: relative;
        background-color: #f5f5f5;

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

.image {
  max-height: 250px;
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  top: -20px;
  background-color: #f5f5f5;
}

.category {
  position: absolute;
  bottom: -30px;
  z-index: 4;
  background-color: #116e69;
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
  font-weight: 500;
  font-size: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.description {
  color: #000000de;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  max-height: 148px;
  overflow: hidden;
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
