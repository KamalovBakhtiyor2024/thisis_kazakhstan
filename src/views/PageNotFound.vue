<template lang="pug">
div
  main
    section
      v-container.py-16
        h1.text-center Страница не найдена
        div.text-center.mt-4 404 error
        div.links.ma-auto.mt-16
          ul.links-big.d-flex.flex-wrap.align-center.pa-0
            li 
              router-link(to="/").link.text-uppercase.font-weight-bold.text-decoration-none
                | Жизнь и общество
            li 
              router-link(to="/").link.text-uppercase.font-weight-bold.text-decoration-none
                | БИЗНЕС И ИННОВАЦИИ
            li 
              router-link(to="/").link.text-uppercase.font-weight-bold.text-decoration-none
                | НОВОСТНЫЕ ФАКТЫ
            li 
              router-link(to="/").link.text-uppercase.font-weight-bold.text-decoration-none
                | СТАТИСТИКА И ИНФОРМАЦИЯ
        div.links.ma-auto.mt-6
          ul.links-small.d-flex.flex-wrap.align-center.pa-0
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Общество
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Дизайн
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Образование
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Путешествие
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Разработка
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Язык
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Музыка
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Кухня
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Менталитет
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Слайд-шоу
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Спорт
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Инновация
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Природа
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Литература
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Бизнес
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Экономика
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Исследование
            li
              router-link(to="/").link.link-small.text-uppercase.text-decoration-none
                | Благополучие
</template>

<script>
export default {
  name: "PageNotFound",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #273e47;
  font-size: 2.75rem;
}

.links {
  max-width: 720px;

  &-big {
    gap: 12px;

    & > * {
      margin-bottom: 18px;
    }
  }

  &-small {
    gap: 8px;

    & > * {
      margin-bottom: 10px;
    }
  }
}

li {
  list-style: none;
}

.link {
  background: #dfe4e6;
  padding: 0.5em 0.8em;
  color: #273e47;
  font-size: 1.4em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #273e47;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }

  &-small {
    font-size: 14px;
    font-weight: 600;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 26px;
  }

  .link {
    font-size: 16px;

    &-small {
      font-size: 12px;
    }
  }
}
</style>
