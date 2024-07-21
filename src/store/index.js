import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url: "http://localhost:8000/api/v1/",
    language_dialog: false,
    multi_dialog: false,
    multi_dialog_message: null,
    multi_dialog_complete: false,
    multi_dialog_warning: false,
    poll_create_delete_dialog: false,
    user: null,
    posts: [],
    categories: [],
  },
  getters: {},
  mutations: {
    set_user(state, payload) {
      state.user = payload;
    },
    set_posts(state, payload) {
      state.posts = payload;
    },
    set_categories(state, payload) {
      state.categories = payload;
    },
    set_poll_create_delete_dialog(state, payload) {
      state.poll_create_delete_dialog = payload;
    },
    set_language_dialog(state, payload) {
      state.language_dialog = payload;
    },
    set_multi_dialog(state, payload) {
      state.multi_dialog = payload;
    },
    set_multi_dialog_message(state, payload) {
      state.multi_dialog_message = payload;
    },
    set_multi_dialog_warning(state, payload) {
      state.multi_dialog_warning = payload;
    },
    set_multi_dialog_complete(state, payload) {
      state.multi_dialog_complete = payload;
    },
  },
  actions: {},
  modules: {},
});
