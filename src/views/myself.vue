<template>
  <div class="container">
    <header>
      <div>
        <span>我的</span>
        <van-icon name="setting" />
        <van-icon name="weapp-nav" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
    name:'myself',
    data(){
      return {

      }
    },
    methods:{
      axios({
        url:'http://api.cat-shop.penkuoer.com/api/v1/users/info'
      })
    }
}
</script>

<style scoped>
header div{
  text-align: center;
}

</style>
