<template>
  <div class="container">
    <header>
      <van-nav-bar title="登陆" />
    </header>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>

    <van-button type="primary" @click="login">登陆</van-button>
  </div>
</template>

<script>
import api from "../api/api_pro";
// import axios from 'axios'
export default {
  name: "login",
  data(){
    return{
        username: "",
        password: ""
    }
  },
  methods: {
    login() {
      let params = {
        userName:this.username,
        password:this.password,
      };
      api.login(params).then((data) => {
        console.log(data);
      });

      // axios({
      //   method:'post',
      //   url:'http://api.cat-shop.penkuoer.com/api/v1/auth/login',
      //   dataType:'json',
      //   params:params
      // }).then((res)=>{
      //   console.log(res)
      //   if(res.data.code === 1){
      //     this.$router.push('/index')
      //   }
      // })

    }
  }
};
</script>

<style>
</style>
