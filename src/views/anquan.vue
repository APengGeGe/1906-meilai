<template>
  <div class="container">
        <header>
          <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
        </header>

        <section>
          <router-link tag="div" to="">账号名        <span>{{username}}</span><van-icon name="arrow" class="icon" /></router-link>
          <router-link tag="div" to="/password">修改密码 <van-icon name="arrow" class="icon"/></router-link>



        </section>
  </div>
</template>

<script>
  import api from '../api/api_pro'
  let token = localStorage.getItem('token')

export default {
  name:'anquan',
  data(){
    return{
      title:'账号与安全',
      username:'',
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  mounted(){
     api.myself({id:token}).then((res)=>{
       console.log(res)
       this.username = res.info.user.phonenum
     })
  },
}
</script>

<style scoped>
section  div{
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 2px solid #ccc;
  font-size: 14px;
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

section span{
  margin-left: 200px;
}
</style>
