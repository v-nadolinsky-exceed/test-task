import Vue from 'vue';
import Router from 'vue-router';
import SearchURL from "@/views/components/SearchURL";
import ListIndexedPages from "@/views/components/ListIndexedPages";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SearchURL',
      component: SearchURL
    },
    {
      path: '/list',
      name: 'ListIndexedPages',
      component: ListIndexedPages
    }
  ]
})