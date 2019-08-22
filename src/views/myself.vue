<template>
  <div class="container">
    <header>
      <van-nav-bar
        title="我的"
        left-text="返回"
        right-text="按钮"
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
              <ul>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" />
                  <p>待付款</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" />
                  <p>代发货</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" />
                  <p>待收货</p>
                </router-link>
                <router-link tag="li" to="">
                  <van-icon name="credit-pay" />
                  <p>已收货</p>
                </router-link>
                 <router-link tag="li" to="">
                  <van-icon name="credit-pay" />
                  <p>售后服务</p>
                </router-link>
              </ul>
            </div>
        </div>


        <div class="notoken" ref="notoken">
              没有token
        </div>

    </section>


  </div>
</template>

<script>
import  api from '../api/api_pro'

export default {
    name:'myself',
    data(){
      return {
        name:'',
        yue:'0.00',
        qian:'0.00',
        you:'0.00',
      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){

      }
    },
    mounted(){
      let token = localStorage.getItem('token')
        console.log(token)
        if(token){
          this.$refs.notoken.style.display = 'none'
        api.myself({id:token}).then((res)=>{
          console.log(res.info.user.phonenum)
          this.name = res.info.user.phonenum
        })

        }else{
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
}
.yue li{
  float: left;
  margin-left: 55px;
}

.indent{
  height: 60px;
  background: #ccc;
  margin-top: 20px;
}

.indent li{
  width: 60px;
  float: left;
  text-align: center;
  margin-left: 10px;
}
</style>
