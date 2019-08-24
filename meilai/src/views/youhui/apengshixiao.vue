<template>
  <div>
    <van-nav-bar
      title="失效优惠卷"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />

    <van-tabs v-model="active" class="van">
      <van-tab title="已使用">
           <van-card
            v-for="(item,i) in list"
            :key="i"
            :desc="item.coupon"
            title="商品标题"
          />
      </van-tab>
      <van-tab title="已过期">

         <van-card
            v-for="(item,i) in arr"
            :key="i"
            :desc="item.coupon"
            title="商品标题"

          />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:"apengshixiao",
  data(){
    return{
        active:2,
        list:[],
        arr:[]
    }
  },
  methods:{
      onClickLeft() {
      this.$router.go(-1)
    },
  },
  mounted () {
     var id = localStorage.getItem("token")
      axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/coupon/showFailureCoupon",
        params:{id:1}
      }).then((data)=>{
          console.log(data.data.info)
        // this.list = data.data.info
          var date = data.data.info
          date.map((item)=>{
            if(item.status =="已使用"){
                this.list.push(item)
            }else{
                  this.arr.push(item)
            }
          })

      })
  }
}

</script>
<style scoped>
.van{
  margin-top:46px;
}
</style>
