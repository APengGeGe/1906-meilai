import  * as API from   './index'

export  default {
  grtProduct:params=>{
    return API.POST('/api/v1/admin/products',params)
  },
  login:params=>{
    return API.POST('/user/login',params)
  },
  register:params=>{
    return API.POST('/user/register',params)
  },
  myself:params=>{
    return API.POST('/user/mine',params)
  },
  recharge:params=>{
    return API.POST('/user/recharge',params)
  }

}
