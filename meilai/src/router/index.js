import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Deng from '@/views/apengdenglu'
import Zhu from '@/views/apengzhuce'
import Shou from '@/views/apengshouye'
import Home from '@/views/apenghome'
import You from '@/views/apengpyou'
import Qing from '@/views/apengqingdan'
import Gou from '@/views/apenggouwu'
import Wo from '@/views/apengwode'
import De from '@/views/apengdetail'
import Suo from '@/views/apengshousuo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Deng
    },
    {
      path: '/apengdenglu',
      component:Deng
    },
    {
      path: '/apengzhuce',
      component:Zhu
    },
    {
      path: '/detail/:id',
      component:De
    },
    {
      path: '/apengshousuo',
      component:Suo
    },
    {
      path: '/apengshouye',
      component:Shou,
      children:[
        {
          path: '/apengshouye',
          component:Home
        },
        {
          path: '/apenghome',
          component:Home
        },
        {
          path: '/apengpyou',
          component:You
        },
        {
          path: '/apengqingdan',
          component:Qing
        },
        {
          path: '/apenggouwu',
          component:Gou
        },
        {
          path: '/apengwode',
          component:Wo
        },

      ]
    }
  ]
})
