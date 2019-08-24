<template>
  <div class="container">

      <!--                    轮播       -->
      <van-swipe :autoplay="3000" indicator-color="blue" :touchable="true" :height="200">
        <van-swipe-item>
          <img src="../img/1.png" style="width:100vw;height:180px;" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../img/2.png" style="width:100vw;height:180px;" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../img/3.jpg" style="width:100vw;height:180px;" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../img/4.jpg" style="width:100vw;height:180px;" />
        </van-swipe-item>
      </van-swipe>

      <!--             分类                  -->

      <div id="menu-wap">

        <ul >
          <li v-for="(i,k) in list" :key="k" @click="pro()">
            <img :src="i.photo" >
            <p>{{i.menu}}</p>
          </li>
        </ul>

      </div>

      <div class="miaosha">
        <span>超值秒杀</span>
        <i>距{{hours}}点03场结束还剩</i>
        <van-count-down :time="time" class="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>

      <div class="czlist">
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>香蕉</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>苹果</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>橘子</p>
        </router-link>
      </div>

      <div id="greens">
        <div class="g-left">生鲜直降</div>
        <div class="g-right-t">蔬菜特惠</div>
        <div class="g-right-b">粮油专区</div>
      </div>


      <div id="tuij">
         <van-tabs v-model="activeName">
            <van-tab title="为你推荐" name="a">
              <van-card v-for="(i,k) in recommend" :key="k"
                :price="i.price"
                :desc="i.desc"
                :title="i.name"
                :thumb="i.photo"
                @click="ttp(i.id)"
                />
            </van-tab>
            <van-tab title="我的清单" name="b">
            </van-tab>
        </van-tabs>
      </div>
  </div>

</template>
<script>
import  api from '../api/api_pro'
export default {
  name:"apenghome",
  data(){
    return{
      name:"chat-o",
       active: 0,
      value: "",
      time: 16549865321654,
      hours: "",
      list: [],
      showlist:[],
      activeName:'',
      recommend:[],
    }
  },
  methods:{
    // top(){
    //   this.$router.push("/apengdenglu")
    //     <div>欢迎：{{this.$store.state.username}}</div>
    //  <div>
    //  <van-button type="primary" @click="top()" >点击</van-button>
    //  </div>

    // },
    onSearch() {},
    onCancel() {},
    ttp(id){
      this.$router.push('/detail/'+id)
    },
    pro(){
      this.$router.push("/apengpyou")

    }
  },
  mounted () {
       api.grtProduct().then((res)=>{
        //console.log(res)
        this.list = res.info
      }),
      api.showBanner().then((res)=>{
        //console.log(res)
        this.showlist = res.info
      }),
      api.recommend().then((res)=>{
        console.log(res)
        this.recommend = res.info
      })
    this.$emit("cli",this.name)
  }
}

</script>
<style scoped>
img{
  width: 60px;
  height: 60px;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

li {
  height: 120px;
  float: left;
  margin-left: 12px;
}

header{
  background: #ccc;
}
header .search {
  width: 70%;
  float: left;
  margin-top: 15px;
}
header span {
  float: left;
  width: 60px;
  margin-left: 20px;
}
header,
footer {
  height: 100px;
  line-height: 100px;
}

section {
  flex: 1;
  overflow: auto;
}

#menu-wap {
  margin-top: 20px;
  background: #ccc;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

#menu-wap .menu {
  text-align: center;
  width: 66px;
}
#menu-wap ul{
  overflow: hidden;
}

#menu-wap .menu-img {
  width: 60px;
  height: 60px;

}

.miaosha i {
  margin-left: 120px;
  font-style: normal;
}

.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}

.time {
  width: 100px;
  float: right;
}

.czlist {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}
.czlist .menu {
  text-align: center;
  width: 66px;
}
.czlist .menu-img {
  width: 60px;
  height: 60px;
  border: 1px solid red;
  float: left;
}

#greens{
  margin-top:15px;
  margin-bottom: 15px;
  overflow: hidden
}
#greens .g-left{
  margin-left: 10px;
  width: 150px;
  height: 150px;
  border: 1px solid  #ccc;
  float: left;
}
#greens .g-right-t{
  margin-right: 10px;
  width: 150px;
  height: 50px;
  border: 1px solid  #ccc;
  float:right;
}
#greens .g-right-b{
  margin-top: 15px;
  margin-right: 10px;
  width: 150px;
  height: 50px;
  border: 1px solid  #ccc;
  float:right;
}
</style>
