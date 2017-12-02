import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    }

  ]
})
