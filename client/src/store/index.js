import Vuex from "vuex";
import Vue from "vue";
import authModule from "./modules/auth";
import cart from "./modules/cart";
import products from "./modules/products";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["auth.token"],
});
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
    products,
    cart,
  },
  plugins: [dataState],
});

/*const store = new Vuex.Store({
  modules: {
    auth: authModule,
    cart,
    products,
  },
  /*plugins: [dataState],*/
//});

//export default store;
