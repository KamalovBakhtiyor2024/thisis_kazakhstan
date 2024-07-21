import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import flag from "./plugins/flag";
import axios from "axios";
import VueApexCharts from "vue-apexcharts";

// FontAwesomeIcons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faMagnifyingGlass,
  faArrowDown,
  faCloud,
  faPlus,
  faUser,
  faRadiation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faMagnifyingGlass,
  faArrowDown,
  faCloud,
  faPlus,
  faUser,
  faRadiation,
  faCheck
);

Vue.use(VueApexCharts);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ApexCharts", VueApexCharts);

Vue.config.productionTip = false;

// Функция для определения системного языка
function setLanguageDefault() {
  const systemLanguage = window.navigator.language.split("-")[0];
  if (systemLanguage === "ru" || systemLanguage === "kz") {
    i18n.locale = systemLanguage;
  } else i18n.locale = "en";
}

function set_language_by_location_hash() {
  if (
    (location.hash !== "" && location.hash === "#ru") ||
    (location.hash !== "" && location.hash === "#kz")
  ) {
    // Убрать символ # в начале строки и установить язык
    i18n.locale = location.hash.slice(1);
  } else {
    setLanguageDefault();
  }
}

// Получить данные пользователя, если он авторизован в системе
function getProfile() {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  if ((id !== null) & (token !== null)) {
    axios
      .get(store.state.api_url + "get_profile", {
        params: {
          id: id,
        },
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        // Сохранить user в store
        store.commit("set_user", response.data[1]);

        // Сохранить id и token
        localStorage.setItem("id", response.data[0].id);
        localStorage.setItem("token", response.data[0].token);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function getCategories() {
  axios
    .get(store.state.api_url + "categories/")
    .then((response) => {
      console.log(response.data);
      store.commit("set_categories", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getPosts() {
  axios
    .get(store.state.api_url + "posts/")
    .then((response) => {
      console.log(response.data);
      store.commit("set_posts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

set_language_by_location_hash();
getCategories();
getPosts();
getProfile();

new Vue({
  router,
  store,
  vuetify,
  i18n,
  flag,
  render: (h) => h(App),
}).$mount("#app");
