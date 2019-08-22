<template>
  <div class="container">
    <header>
      <van-nav-bar
        title="我的"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>

    <section>
      <div class="name">

      </div>

      <div class="yue">

      </div>
    </section>


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
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){

      }
    }
}
</script>

<style scoped>
header div{
  text-align: center;
}
section .name{
  height: 100px;
  border: 1px solid red
}
section .yue{
  height: 100px;
  border: 1px solid red
}
</style>
