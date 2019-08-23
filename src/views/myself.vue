<template>
  <div class="container">
    <header>
      <van-nav-bar
        title="我的"
        left-text="返回"
        :right-text="set"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>

    <section>
        <div class="hastoken" ref="hastoken">
           <div class="name">
             <div class="touxiang"><h2>头像</h2></div>
             <p >昵称：{{name}}</p>
          </div>

            <div class="yue">
                <ul>
                  <li>
                                               <!--       余额显示BUG          -->
                    <p>{{yue}}</p>
                    <span>余额</span>
                  </li>
                  <li>
                    <p>{{qian}}</p>
                    <span>欠款</span>
                  </li>
                  <li>
                    <p>{{you}}</p>
                    <span>优惠</span>
                  </li>
                </ul>
            </div>

            <div class="indent">
              <router-link tag="h2" to="">我的订单</router-link>
              <ul>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" size=30 />
                  <p>待付款</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" size=30  />
                  <p>待发货</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" size=30  />
                  <p>待收货</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" size=30  />
                  <p>已收货</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" size=30  />
                  <p>售后服务</p>
                </router-link>
              </ul>
            </div>


          <div class="chongzhi">
                <router-link tag="h2" to="">在线充值</router-link>
                <div @click="tap(500)" class="div">500</div>
                <div @click="tap(300)" class="div">300</div>
                <div @click="tap(200)" class="div">200</div>
                <div @click="tap(100)" class="div">100</div>

                   <!-- <van-field v-model="number"  /> -->
                    <van-field
                      v-model="number"
                      required
                      clearable
                      label="其他数额"
                      placeholder="请输入金额"
                    />
                <van-button type="primary" size="large" @click="tab(number)">确认充值</van-button>
                                                    <!--       确定充值 弹出框未完善               -->
          </div>


        </div>








        <div class="notoken" ref="notoken">
            <h2>您还未登陆</h2>
        <van-button type="primary" size="large"  to="/login">去登陆</van-button>

        </div>

    </section>


        <footer>
          <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
            <van-tabbar-item icon="expand">菜品</van-tabbar-item>
            <van-tabbar-item icon="wap-nav">常用清单</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart"  to="./cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager" to="myself">我的</van-tabbar-item>
          </van-tabbar>
        </footer>

  </div>
</template>

<script>
import  api from '../api/api_pro'
let id = localStorage.getItem('token')
export default {
    name:'myself',
    data(){
      return {
        name:'',
        yue:'0.00',
        qian:'0.00',
        you:'0.00',
        active:0,
        number:'',
        set:'设置',

      }
    },
    methods:{
      tap(num){
        console.log(num)
        this.number  = num
      },
      tab(number){
        console.log(number)

        let params = {balance:number,id:id}
        console.log(params)
        api.recharge(params).then((res)=>{
          console.log(res)
        })
      },
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){
          this.$router.push('/setting')
      }
    },
    mounted(){
      let token = localStorage.getItem('token')
        console.log(token)
        if(token){
          this.$refs.notoken.style.display = 'none'
        api.myself({id:token}).then((res)=>{
          console.log(res.info.user.phonenum)
          console.log(res)
          this.yue = res.info.user.balance
          this.name = res.info.user.phonenum
        })

        }else{
          this.set = ''
          this.$refs.hastoken.style.display = 'none'
        }
    },
}
</script>

<style scoped>
header div{
  text-align: center;
}
section .name{
  height: 50px;
  border-bottom: 2px solid #ccc;
  margin-top:10px;
}

.touxiang{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: skyblue;
  margin-left: 60px;
  float: left;
}
.name p{
  text-align: left;
  width: 50px;
  margin-left: 30px;
  float: left;
}

section .yue{
  width: 80%;
  margin: 0 auto;
  height: 100px;
  line-height: 30px;
  border: 1px solid #ccc;
  margin-top: 20px;
  text-align: center;
}
.yue li{
  float: left;
  margin-left: 55px;
}

.indent{
  height: 120px;
  background: #ccc;
  margin-top: 20px;
}

.indent li{
  width: 60px;
  float: left;
  text-align: center;
  margin-left: 10px;
  line-height: 26px;
}


.chongzhi h2{
  border-bottom:1px solid  #ccc;
}
.chongzhi .div{
  width: 80px;
  height: 45px;
  border: 1px solid  greenyellow;
  color:greenyellow;
  line-height: 45px;
  text-align: center;
  font-size: 25px;
  float: left;
  margin-left: 10px;
}
.chongzhi input{
  margin-top: 10px;
}
</style>
