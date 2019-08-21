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
       <van-swipe :autoplay="3000" indicator-color="blue" :touchable="true" :height="200">
          <van-swipe-item><img src="../img/1.png" alt=""></van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <van-grid :column-num="2">
          <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>

    </section>








    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="expand">菜品</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">常用清单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return {
      active:0,
      value:''
    }
  },
  methods:{
    onSearch(){

    },
    onCancel(){

    },

  },

}
</script>

<style scoped>
.container{
  height: 100vh;
  display: flex;
  flex-direction: column
}

li{
  height: 50px;
  border-top:80px solid red
}

header .search{
  width: 70%;
  float: left;
  margin-top: 15px;
}
header span{
  float: left;
  width: 60px;
  margin-left: 20px;
}
header,footer{
  height: 100px;
  line-height: 100px;


}

section{
  flex: 1;
  overflow: auto;
}
</style>
