<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
      <div id="vie">
        <router-view @ccc="tit"></router-view>
      </div>


  </div>
</template>

<script>
export default {
    name:"apengkefu",
    data(){
      return{
          title:""
      }
    },
    methods:{
      tit(msg){
          this.title = msg
      },
      onClickLeft() {
       this.$router.go(-1)
      }
    },
    mounted () {

    }

}

</script>
<style scoped>

#vie{
  margin-top:46px;
}


</style>
