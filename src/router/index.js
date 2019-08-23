import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index',

    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/login')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../views/register')
    },
    {
      path:'/index',
      name:'index',

      component:()=>import('../views/index'),
      children:[
        {
          path:'/home',
          redirect:'/index',
          name:'home',
          component:()=>import('../views/home')
        }
      ]
    },
    {
      path:'/myself',
      name:'myself',
      component:()=>import('../views/myself')
    },
    {
      path:'/setting',
      name:'setting',
      component:()=>import('../views/setting')
    },
    {
      path:'/anquan',
      name:'anquan',
      component:()=>import('../views/anquan')
    },
    {
      path:'/password',
      name:'password',
      component:()=>import('../views/password')
    },
    {
      path:'/paren',
      name:'paren',
      component:()=>import('../views/paren')
    }

  ]
})