<template>
  <div class="container">
    <div class="header">
       <van-icon name="service"  />

          <van-nav-bar
        left-text="返回"
         v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
      />
    </div>


        <van-swipe :autoplay="3000" indicator-color="blue" :touchable="true" :height="200">
          <van-swipe-item><img src="../img/1.png" alt=""></van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>


      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="expand">菜品</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">常用清单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
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

    }
  }
}
</script>

<style scoped>

</style>
