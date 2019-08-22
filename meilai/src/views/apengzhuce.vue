<template>

  <div>
     <img v-for="(img,i) in imageList" v-lazy="img" class="aimg" :key="i"/>
      <van-nav-bar
        title="注册"
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
      </div>
      <van-button type="primary" @click="top()" class="de">注册</van-button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'apengdenglu',
  data(){
    return{
      username:'',
      password:'',
       imageList: ['http://img3.imgtn.bdimg.com/it/u=956449621,3324153932&fm=26&gp=0.jpg'
			      ],
    }
  },
  methods:{
    top(){
        axios({
          method:"post",
          url:"http://106.12.52.107:8081/MeledMall/user/register",
          params:{phonenum:this.username,password:this.password}
        }).then((data)=>{
            console.log(data.data)
            if(data.data.code ==1){
                this.$router.push("/apengdenglu")
            }else{
              alert("注册失败")
            }

        })
    }
  },
  mounted () {

  }
}

</script>
<style scoped>

.deng{
  background:peachpuff;
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
  margin-left:150px;
  margin-top:30px;
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
