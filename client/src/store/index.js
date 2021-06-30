import Vue from 'vue';
import Vuex from 'vuex';
import Posts from "./modules/Posts";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Posts
  }
})
export default store;
