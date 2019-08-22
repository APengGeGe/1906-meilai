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
      <van-uploader v-model="fileList" multiple />

      <van-button type="primary" @click="register">注册</van-button>
  </div>
</template>

<script>
// import api from '../api/api_pro'
import axios from 'axios'
export default {
  name:'register',
  data(){
    return{
        username:'',
        password:'',
        fileList:[{
          url:''
        }]
    }
  },
  methods:{
    register(){
      let params = {
        phonenum:this.username,
        password:this.password,

      }
      // console.log(params)
      // api.getRegister(params).then((data)=>{
      //   console.log(data)
      // })
        axios({
          method:'post',
          url:'http://106.12.52.107:8081/MeledMall/user/register',
          params:params
        }).then((data)=>{
          alert(data.data.info)
          if(data.data.code=== 1 ){
            this.$router.push('/login')
          }
        })


    },

  }
}
</script>

<style>

</style>
