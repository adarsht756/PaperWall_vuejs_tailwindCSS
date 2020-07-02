import Vue from "vue";
import Vuex from "vuex";
import * as user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    userIsLoggedIn: false
  },
  mutations: {
    LOGIN_USER(state) {
        state.userIsLoggedIn = true
    }
  },
  actions: {}
});
