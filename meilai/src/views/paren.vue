<template>
  <div class="container">
        <header>
          <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="账户"
            left-arrow
            @click-left="onClickLeft"
             @click-right="onClickRight"
          />


      </header>

      <section>
        <router-link tag="div" to="">昵称： <van-icon name="arrow" class="icon" /></router-link>
        <router-link tag="div" to="">头像 <van-icon name="arrow" class="icon"/></router-link>
        <router-link tag="div" to="">地址 <van-icon name="arrow"  class="icon" /></router-link>
        <router-link tag="div" to="">手机号<van-icon name="arrow"  class="icon" /></router-link>
        <van-button type="primary" size="large">确认修改</van-button>
      </section>
  </div>
</template>

<script>
export default {
  name:'paren',
  data(){
    return{
      title:'修改个人信息'
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){
      this.$router.push("/setting")
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
