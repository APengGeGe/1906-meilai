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
import Ke from '@/views/apengkefu'
import Xiao from '@/views/apengxiaoxi'
import Chang from '@/views/changjian/changj'
import Mei from '@/views/changjian/meiri'
import Fu from '@/views/changjian/kefu'
import Youh from '@/views/youhui/apengyouhui'
import Shi from '@/views/youhui/apengshixiao'

Vue.use(Router)

const router= new Router({
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
      path: '/apengxiaoxi',
      component:Xiao
    },
    {
      path: '/apengyouhui',
      component:Youh
    },
    {
      path: '/apengshixiao',
      component:Shi
    },
    {
      path: '/apengkefu',
      component:Ke,
      children:[
        {
          path: '/changj',
          component:Chang
        },
        {
          path: '/meiri',
          component:Mei
        },
        {
          path: '/kefu',
          component:Fu
        },
        {
          path: '/apengkefu',
          component:Fu
        }
      ]
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


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


router.beforeEach((to, from, next) => {
  //nprogress
  NProgress.start()
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()

})

router.afterEach(() => {
  NProgress.done()
})



export default router;

