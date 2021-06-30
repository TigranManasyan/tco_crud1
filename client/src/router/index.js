import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from "../views/dashboard/posts/Posts";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/',  name: 'HelloWorld', component: HelloWorld },
    { path: '/posts',  name: 'Posts', component: Posts },
  ]
})
