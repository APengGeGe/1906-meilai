<template>

  <div>
    <img v-for="(img,i) in imageList" v-lazy="img" class="aimg" :key="i"/>
      <van-nav-bar
        title="登录"
        :fixed="true"
        class="deng"

      />

      <div id="tit">

        <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          left-icon="friends-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
          class="tit1"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          left-icon="more-o"
          class="tit2"
        />
      </van-cell-group>

       <van-button type="primary" @click="tap()" class="de">登录</van-button>
      <van-button type="primary" @click="top()" class="de">注册</van-button>
      </div>




  </div>
</template>

<script>
import axios from "axios"
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"
 export default {
  name:'apengdenglu',
  data(){
    return{
      imageList: ['http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg'],
      username:'',
      password:'',
    }
  },
  methods:{
    ...mapActions(["login"]),
    tap(){
      axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/user/login",
        params:{phonenum:this.username,password:this.password}
      }).then((data)=>{
          console.log(data.data.info)
          var date = data.data.info

          if(data.data.code == 1){
              this.$toast('登录成功')
            this.$router.push("/apengshouye")
            localStorage.setItem("token",JSON.stringify(date.id))
          }else{
             alert("登录失败")
             this.$router.push("/apengzhuce")
          }
      })
      this.$store.commit("huo",this.username)
    },
    top(){
      this.$router.push("/apengzhuce")
    }
  },
  mounted () {


  }
}

</script>
<style scoped>

.deng{
  background: papayawhip;

}
#tit{
  margin-top:46px;
}
.tit1{
  margin-top:200px;
background: palegoldenrod
}
.tit2{

  background: palegoldenrod
}
.de{
  margin:30px 60px;
  border-radius: 30px

}
img{
  width:100%;
  height:100%;
  position: fixed;
		top:0;
		left:0
}
</style>
