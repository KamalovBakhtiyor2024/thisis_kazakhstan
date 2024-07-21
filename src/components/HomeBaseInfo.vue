<template lang="pug">
div
  div(class="services-view text-center")
    v-container(class="pt-7 pb-6").container-pd
      v-col.py-0
        v-row(style="max-width: 760px;" class="v-row justify-space-between align-center ma-auto")
          div(class="view white--text")
            div(class="d-inline-block")
              div(id="services-one" class="font-weight-medium white--text") 0
              font-awesome-icon(icon="fa-solid fa-plus").white--text
            div(class="services-text white--text").text-uppercase Население млн
          div(class="line white")
          div(class="view white--text")
            div(class="d-inline-block")
              div(id="services-two" class="font-weight-medium white--text") 0
              font-awesome-icon(icon="fa-solid fa-plus").white--text
            div(class="white--text services-text").text-uppercase Бюджет страны трлн
          div(class="line white")
          div(class="view white--text")
            div(class="d-inline-block")
              div(id="services-tree" class="font-weight-medium white--text") 0
              font-awesome-icon(icon="fa-solid fa-plus").white--text
            div(class="services-text white--text").text-uppercase Затраты трлн
</template>

<script>
export default {
  name: "HomeBaseInfo",
  data() {
    return {
      show_transition_numbers: false,
      element: null,
    };
  },
  watch: {
    show_transition_numbers() {
      if (this.show_transition_numbers) {
        this.animation_numbers("services-one", 19, 19, 1);
        this.animation_numbers("services-two", 15, 15, 1);
        this.animation_numbers("services-tree", 18, 18, 1);
      }
    },
  },
  methods: {
    // Animation numbers
    animation_numbers(elementId, number, steps, counter) {
      const element = document.getElementById(elementId);

      if (element) {
        let index = 0;
        let time = Math.round(200 / (number / steps));

        let interval = setInterval(() => {
          index += counter;

          if (index >= number) {
            clearInterval(interval);
            index = number;
          }

          element.innerHTML = index;
        }, time);
      }
    },
  },
  mounted() {
    // Animation numbers
    this.element = document.querySelector(".services-view");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting && !this.show_transition_numbers) {
          this.show_transition_numbers = true;
        } else null;
      });
    });

    observer.observe(this.element);
  },
};
</script>

<style scoped lang="scss">
.services-view {
  position: absolute;
  background-color: var(--main-blue);
  left: 50%;
  width: 100vw;
  margin-right: -50%;
  z-index: 4;
  transform: translate(-50%, -100%);

  & > div {
    max-width: 1080px;
  }
}

.line {
  width: 2px;
  height: 58px;
}

.view {
  & > * {
    position: relative;
  }

  & > *:first-child {
    font-size: 1.875rem;

    & > *:last-child {
      position: absolute;
      position: absolute;
      right: -18px;
      top: -12px;
      font-size: initial;
    }
  }
}

.services-text {
  font-weight: 600;
}

@media screen and (max-width: 1080px) {
  .services-view {
    & > div {
      max-width: 780px;
    }
  }

  #block-services-four {
    display: none;
  }

  #block-services-five {
    display: none;
  }

  #line-services-four {
    display: none;
  }

  #line-services-five {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .v-row {
    justify-content: space-around !important;
  }
}

@media screen and (max-width: 600px) {
  .view {
    font-size: calc(var(--index) * 1.25);
    width: 35%;
  }

  .container-pd {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .v-row {
    gap: 24px;
    position: relative;

    &::before {
      content: "";
      height: 45%;
      background-color: #fff;
      width: 2px;
      position: absolute;
      top: 0;
      left: 52%;
      margin-right: -50%;
      transform: translateX(-40%);
    }
  }

  .line {
    display: none;
  }

  .services-view {
    gap: initial;
    justify-content: space-around !important;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
