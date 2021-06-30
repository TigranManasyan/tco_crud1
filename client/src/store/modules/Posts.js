import axios from 'axios'
export default {
  namespaced:true,
  state:{
    posts:[],
  },
  mutations:{
    storePosts(state, data) {
      state.posts = data;
    }
  },
  getters:{
    posts: state => state.posts
  },
  actions:{
    setPosts(context) {
      axios.get('posts').then((response) => {
        context.commit('storePosts', response.data);
      })
    },

  }
}
