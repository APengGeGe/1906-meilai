<template>
  <div class="container">
    <header>
      <van-nav-bar  :title="title" />
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

    <van-button type="primary" size="large" @click="login">退出登录</van-button>
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
        password: "",
        title:'登陆'
    }
  },
  methods: {
    login() {
      let params = {
        phonenum:this.username,
        password:this.password,
      };
      console.log(params)
      api.login(params).then((data) => {
        console.log(data);
        if(data.code===1){
          localStorage.setItem('token',data.info.id)
          this.$router.push('/index')
        }
      });

    }
  }
};
</script>

<style>
</style>
