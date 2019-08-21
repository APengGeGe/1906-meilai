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
      component:()=>import('../views/index')
    },
    {
      path:'./cart',
      name:'cart',
      component:()=>import('../views/cart')
    }
  ]
})
