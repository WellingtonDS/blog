import { api } from '@/service/service';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      code: "",
      street: "",
      number: "",
      district: "",
      city: "",
      state: ""
    },
    product_user: []
  },

  getters: {
  },

  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },

    UPDATE_PRODUCT_USER (state, payload) {
    state.product_user = payload;
    },

    ADD_PRODUCT_USER (state, payload) {
      state.product_user.unshift(payload);
      }
  },

  actions: {
    getProductUser(context) {
      return api.get(`/product?user_id=${context.state.user.id}`).then(response => {
        context.commit("UPDATE_PRODUCT_USER", response.data);
      });
    },

    getUser(context, payload) {
     return api.get(`/user/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN",true);
      });
    },

    createUser(context, payload) {
      context.commit("UPDATE_USER", {id: payload.email});
      return api.post("/user", payload);
    },

    closeUser (context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        code: "",
        street: "",
        number: "",
        district: "",
        city: "",
        state: ""
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },

  modules: {
  }
})
