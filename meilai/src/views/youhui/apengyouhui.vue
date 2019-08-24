<template>
  <div>
     <van-nav-bar
      title="优惠卷"
      left-text="返回"
      right-text="失效优惠劵"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    />

    <div id="you" ref="tit">
      <van-card
        v-for="(item,i) in list"
        :key="i"
        :desc="item.coupon"
        title="商品标题"

      />
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"apengyouhui",
    data(){
      return{
        list :[],

      }
    },
    mounted () {
      var id = localStorage.getItem("token")
      axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/coupon/showCoupon",
        params:{id:1}
      }).then((data)=>{
          console.log(data)
        this.list = data.data.info
        if(this.list.length == 0){
            this.$refs.tit.html = "暂无"
        }
      })
    },
    methods:{
      onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push("/apengshixiao")
    }
    }
}

</script>
<style scoped>
#you{
  margin-top:46px;
}
</style>
