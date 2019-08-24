<template>
  <div class="container">
      <header>
          <van-nav-bar
            title="设置"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
      </header>
      <section>
        <router-link tag="div" to="/anquan">账户与安全 <van-icon name="arrow" class="icon" /></router-link>
        <router-link tag="div" to="/paren">修改个人信息 <van-icon name="arrow" class="icon"/></router-link>
        <router-link tag="div" to="">清除缓存 <van-icon name="arrow"  class="icon" /></router-link>
        <router-link tag="div" to="">检查更新 <van-icon name="arrow"  class="icon" /></router-link>
        <van-button type="primary" size="large" @click="tuichu">退出登录</van-button>
      </section>




  </div>
</template>

<script>
export default {
  name:'setting',
  data(){
    return{

    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    tuichu(){
      localStorage.removeItem('token')
      this.$router.push('/apengdenglu')
    }
  }
}
</script>

<style scoped>
section  div{
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 2px solid #ccc;
  font-size: 20px;
}
section div:first-child{
  border-top: 2px solid #ccc;
}
section .icon{
  float: right;
  line-height: 60px;
}
section button{
  margin-top: 20px;
}
</style>
