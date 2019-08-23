import  * as API from   './index'

export  default {
  grtProduct:params=>{                                       //  商品种类
    return API.POST('/menu/parentMenu',params)
  },
  login:params=>{
    return API.POST('/user/login',params)
  },
  register:params=>{
    return API.POST('/user/register',params)
  },
  myself:params=>{                                            //  个人信息
    return API.POST('/user/mine',params)
  },
  recharge:params=>{                                          //  充值金额
    return API.POST('/user/recharge',params)
  },
  editMsg:params=>{                                           //修改个人信息
    return API.POST('/user/editMsg',params)
  },
  showBanner:params=>{
    return API.POST('/sildeShow/show')                        //轮播
  }
}
