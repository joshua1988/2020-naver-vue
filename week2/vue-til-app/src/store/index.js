import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    str: "hello",
    token: ""
  },
  mutations: {
    changeString(state) {
      state.str = state.str + "!";
    },
    setToken(state, token) {
      state.token = token;
    }
  }
  // actions: {

  // }
});

// commit('setToken', 123)
