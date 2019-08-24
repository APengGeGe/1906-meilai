<template>
  <div id="shou">
      <div id="tou">
         <van-icon name="service-o" class="ic" @click="ke()"/>
        <input type="text" v-model="cha" class="cha1" placeholder="请输入搜索信息" @click="ttp()"/>
        <van-icon :name="name" class="ic" @click="xiao()"/>
      </div>

      <div id="view">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <router-view @cli="tap"></router-view>
          </van-pull-refresh>
      </div>

    <div>
        <van-tabbar v-model="active" :fixed="true" class="foot">
          <van-tabbar-item icon="home-o" to="/apenghome">首页</van-tabbar-item>
          <van-tabbar-item icon="qr" to="/apengpyou">全部菜品</van-tabbar-item>
          <van-tabbar-item icon="qr-invalid" to="/apengqingdan">菜品清单</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart-o" to="/apenggouwu">购物车</van-tabbar-item>
          <van-tabbar-item icon="user-circle-o" to="apengwode">我的</van-tabbar-item>
        </van-tabbar>
    </div>

  </div>
</template>

<script>
export default {
  name:"apengshouye",
  data(){
    return{
        isLoading: false,
        active: 0,
        title:"首页",
        name:"chat-o",
        cha:''
    }
  },
  methods:{
    ke(){
      this.$router.push("/apengkefu")
    },
    xiao(){
      var url = window.location.hash
      console.log(url)
      if(url == "#/apenghome"){
        this.$router.push("/apengxiaoxi")
      }
      if(url == "#/apengpyou"){
          this.$router.push("/apengyouhui")
      }
       if(url == "#/apengqingdan"){
          this.$router.push("/apengyouhui")
      }

    },
      onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    tap(msg){
      this.name=msg
    },
    ttp(){
      this.$router.push("/apengshousuo")
    }

   },
   mounted () {


   }
}

</script>
<style scoped>
#shou{
  display: flex;
  flex-direction: column;

}
#tou{
  width:100%;
  height: 50px;
  background:#ccc;
  display: flex;
  justify-content:center;
  align-items: center;
  position:fixed;
  top:0;left:0
}
#view{
  flex:1;
  margin-top:50px;
  margin-bottom:50px;
  overflow: auto;

}
.ic{
  font-size:25px;
  margin:0 20px;
}
.cha1{
  width:250px;
  height:25px;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.foot{
  background: #ccc
}
</style>
