import  * as API from   './index'

export  default {
  grtProduct:params=>{
    return API.POST('/api/v1/admin/products',params)
  },
  login:params=>{
    return API.POST('/api/v1/auth/login',params)
  },
  getRegister:params=>{
    return API.POST('/api/v1/auth/reg',params)
  }
}
