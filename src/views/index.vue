<template>
  <div class="container">
    <header>
      <span>
        <van-icon name="service" />
      </span>
      <div class="search">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <span>
        <van-icon name="flag-o" />
      </span>
    </header>

    <section>
      <!--                    轮播       -->
      <van-swipe :autoplay="3000" indicator-color="blue" :touchable="true" :height="200">
        <van-swipe-item>
          <img src="../img/1.png" alt />
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <!--             分类                  -->

      <div id="menu-wap">
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>米面粮油</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>新鲜蔬菜</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>休闲饮酒</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>鲜蛋</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>肉畜</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>米面粮油</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>新鲜蔬菜</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>休闲饮酒</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>鲜蛋</p>
        </router-link>
        <router-link tag="div" to class="menu">
          <div class="menu-img"></div>
          <p>肉畜</p>
        </router-link>
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
          <p>为你推荐</p>
          <p>我的清单</p>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          />

      </div>


    </section>

    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="expand">菜品</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">常用清单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" to="./cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      active: 0,
      value: "",
      time: 16549865321654,
      hours: "",
      list: []
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

li {
  height: 50px;
  border-top: 80px solid red;
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

#menu-wap .menu {
  text-align: center;
  width: 66px;
}

#menu-wap .menu-img {
  width: 60px;
  height: 60px;
  border: 1px solid red;
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
