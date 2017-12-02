import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import VueResource from 'vue-resource'
import DeatilAnaPage from '@/pages/detail/analysis'
import DeatilCouPage from '@/pages/detail/count'
import DeatilForAnaPage from '@/pages/detail/forecast'
import DeatilPubAnaPage from '@/pages/detail/publish'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'detail',
      component:DetailPage,
      children:[
        {
          path:'analysis',
          component:DeatilAnaPage
        },
        {
          path:'foreast',
          component:DeatilCouPage
        },{
        path:'count',
        component:DeatilForAnaPage
        },
        {
        path:'publish',
        component:DeatilPubAnaPage
        }]
    }
  ]
})
