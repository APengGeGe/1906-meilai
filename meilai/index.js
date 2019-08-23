import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lian from '@/views/lainxi'
import Detail from '@/views/detail'
import Deng from '@/views/denglu'
import Zhu from '@/views/zhuce'
import Shou from '@/views/shouye'
import Home from '@/views/home'
import Dong from '@/views/dongtai'
import Ge from '@/views/geren'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      component:Deng,
    },
    {
      path:"/denglu",
      component:Deng,
      meta(){
        title:登录
      }
    },
    {
      path:"/zhuce",
      component:Zhu,
      meta(){
        title:注册
      }
    },
    {
      path:'/detail',
      name:'/detail',
      component:Detail,
      meta(){
        title:详情
      }
    },
    {
      path:"/shouye",
      component:Shou,
      children:[
        {
          path:"/home",
          component:Home,
          meta(){
            title:首页
          }
        },
        {
          path:"/shouye",
          component:Home,
          meta(){
            title:首页
          }
        },
        {
          path:"/dongtai",
          component:Dong,
          meta(){
            title:动态
          }
        },
        {
          path:"/geren",
          component:Ge,
          meta(){
            title:个人
          }
        },
        {
          path:"/lainxi",
          component:Lian,
          meta(){
            title:菜品
          }
        }
      ]
    },
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
