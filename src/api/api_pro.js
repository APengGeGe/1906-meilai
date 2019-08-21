import  * as API from   './index'

export  default {
  grtProduct:params=>{
    return API.GET('/api/v1/admin/products',params)
  }
}
