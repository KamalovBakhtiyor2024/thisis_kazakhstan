<template lang="pug">
section(id="posts").posts
  v-container.container-pd.pb-0
    v-card.card-posts
      div.card-posts-header.d-flex.align-center
        div
        div
        div
      div.card-posts-content.d-flex.flex-column.align-center
        div(
          v-if="$store.state.posts.length <= 0"
        ).progress.d-flex.flex-column.align-center.justify-center
          v-progress-circular(
            indeterminate
            color="#1d64f2"
            :size="60"
          ).mb-4
          span Загрузка...
        div(
          v-if="$store.state.posts.length > 0"
        ).card-posts-content-cards.d-flex.align-start.flex-wrap.justify-center
          article(v-for="(post, index) in postsSliced" :key="index")
            post-card(
              v-if="post.type === 1" 
              :post="post" 
              @click="$router.push({ name: 'post', params: { slug: post.slug } })"
            )
            fact-card(
              v-if="post.type === 2"
              :fact="post"
            )
        div.card-bottom.pa-4
          v-btn(
            :disabled="postsSliced.length < 6 && posts.length < 6"
            elevation="0"
          ).card-bottom-btn.py-6
            | Показать ещё посты
            font-awesome-icon(icon="fa-solid fa-arrow-down").ml-2
</template>

<script>
// Components
import PostCard from "./cards/PostCard.vue";
import FactCard from "./cards/FactCard.vue";

export default {
  name: "ThePosts",
  components: { PostCard, FactCard },
  props: {
    category: String,
  },
  computed: {
    postsSliced() {
      return this.posts.slice(0, 6);
    },
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style scoped lang="scss">
.posts {
  & > * {
    height: 100%;
    position: relative;
  }
}

.progress {
  min-height: 300px;
}

.container-pd {
  display: grid;
}

.card-posts {
  box-shadow: none !important;
  border-radius: 0 !important;
  background-color: transparent;
  min-height: 400px;
  width: 100%;
  border-bottom-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  overflow: hidden;

  &-content {
    background-color: #fff;
    border-right: 4px solid var(--main-blue);
    border-left: 4px solid var(--main-blue);
    border-bottom: 4px solid var(--main-blue);

    &-cards {
      position: relative;
      padding: 0 18px;
      gap: 12px;
    }
  }

  &-header {
    height: 40px;

    & > * {
      height: 100%;

      &:first-child {
        width: 44px;
        background: linear-gradient(
          -45deg,
          #fff,
          #fff 28.5px,
          var(--main-blue) 0,
          var(--main-blue) 32px,
          transparent 0
        );
      }

      &:nth-child(2) {
        width: calc(100% - 84px);
        background-color: #fff;
        border-top: 4px solid var(--main-blue);
        position: relative;

        &::before {
          content: "";
          width: 6px;
          height: 4px;
          position: absolute;
          left: -6px;
          top: -4px;
          background-color: var(--main-blue);
        }

        &::after {
          content: "";
          width: 6px;
          height: 4px;
          position: absolute;
          right: -6px;
          top: -4px;
          background-color: var(--main-blue);
        }
      }

      &:last-child {
        width: 44px;
        background: linear-gradient(
          45deg,
          #fff,
          #fff 28.5px,
          var(--main-blue) 0,
          var(--main-blue) 32px,
          transparent 0
        );
      }
    }
  }
}

.card-posts-content {
  &-cards {
    position: relative;
    top: -24px;

    & > * {
      width: 32.42%;
    }
  }

  & > * {
    width: 100%;
  }
}

.card-bottom {
  background-color: rgba(222, 222, 222, 0.8);
  backdrop-filter: blur(16px);
  border-bottom-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  overflow: hidden;

  &-btn {
    background-color: var(--main-blue) !important;
    width: 100%;
    color: white;
    border-radius: 0 !important;
    font-weight: 600;
  }
}

@media screen and (max-width: 1200px) {
  .card-posts {
    &-content {
      &-cards {
        & > * {
          width: 32.12%;
        }
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .card-posts {
    &-content {
      &-cards {
        & > * {
          width: 48.62%;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .card-posts {
    &-content {
      &-cards {
        & > * {
          width: 48.32%;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .card-posts-content {
    &-cards {
      & > * {
        width: 100%;
      }
    }
  }
}
</style>
