import Vue from 'vue';
import Router from 'vue-router';
import SearchURL from "@/views/components/SearchURL";
import IndexedContent from "@/views/components/IndexedContent";

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
      path: '/content',
      name: 'IndexedContent',
      component: IndexedContent
    }
  ]
})