<template>
  <div class="container">

    <header>
        <van-nav-bar
          title="注册"
        />
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

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />

      </van-cell-group>

      <van-button type="primary" @click="register">注册</van-button>
  </div>
</template>

<script>
import api from '../api/api_pro'
// import axios from 'axios'
export default {
  name:'register',
  data(){
    return{
        username:'',
        password:'',

    }
  },
  methods:{
    register(){
      let params = {
        phonenum:this.username,
        password:this.password,
      }
      console.log(params)
      api.register(params).then((data)=>{
        console.log(data)
        if(data.code===1){

          this.$router.push('/login')
        }
      })

    },

  }
}
</script>

<style>

</style>
