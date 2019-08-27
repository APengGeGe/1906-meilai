<template>
  <div >
      <div id="top">
        <van-card
         v-for="(item,i) in list"
        :key="i"
        :price="item.mprice"
        :desc="item.mdesc"
        :title="item.mname"
        :thumb="item.mphoto"
        >
          <div slot="tags">
            <van-tag plain type="danger"></van-tag>

            <van-stepper v-model="item.mnum" :plus="jia(item.id,item.mnum,item.uid)" :minus="jian(item.id)"/>

          </div>
          <div slot="footer">
            <van-button size="mini" >购买支付</van-button>
            <van-button size="mini" @click="shan(item.id)">删除</van-button>
          </div>
        </van-card>
      </div>


            <van-goods-action class="mai">
                <van-goods-action-icon
                  icon="chat-o"
                  text="客服"
                  @click="tt()"
                />
                <van-goods-action-icon
                  icon="shop-o"
                  text="店铺"
                />
                <div>{{gou}}</div>
                <van-goods-action-button
                  type="danger"
                  text="立即购买"
                  @click="mai()"
                />
              </van-goods-action>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name:'apenggouwu',
  data(){
    return{
      list:[],
      gou:0
    }
  },
  methods:{
    jia(id,mnum,uid){
      console.log(mnum)
      axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/shopCar/editMnum",
        data:{uid:uid,mid:id,mnum:mnum}
      }).then((data)=>{
        // console.log(data)
        console.log()
      })

    },
    jian(id){
      // console.log("111")
    },
    tt(){
      this.$router.push("/apengkefu")
    },
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      },
      mai(){
          axios({
            method:"post",
            url:'http://106.12.52.107:8081/MeledMall/order/selectOrder',
            params:{订单状态:"待付款"}
          }).then((data)=>{
            console.log(data)
          })
      },
      shan(id){
        // console.log(id)
        let uid = localStorage.getItem("token")
        axios({
          method:"post",
          url:"http://106.12.52.107:8081/MeledMall/shopCar/deleteMenu",
          params:{uid:uid,mid:id}
        }).then((data)=>{

            this.list= this.list.filter(function(v){
            return  v.id!=id
          })
          console.log(this.list)
        })
      }
  },
  mounted() {
    var _this = this
    let uid = localStorage.getItem("token")
    axios({
      method:"post",
      url:"http://106.12.52.107:8081/MeledMall/shopCar/showShopCar",
      params:{uid:uid}
    }).then((data)=>{

      this.list = data.data.info
console.log(this.list)
       this.list.map((item)=>{
         if(_this.addValue <1){
           _this.addValue =1
         }else{

         _this.gou+= parseInt(item.mnum *item.mprice)
         console.log(item.mnum *item.mprice)
         }

       })

  })
  }
}

</script>
<style scoped>

#top{
  margin-bottom:50px;
}
.mai{

  margin-bottom:50px
}
</style>
