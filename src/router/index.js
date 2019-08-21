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
      component:()=>import('../views/myself.vue')
    }
  ]
})
