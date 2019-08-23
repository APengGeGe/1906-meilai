<template>
  <div id="top">
      <div>
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
            <div slot="footer">
                <van-stepper v-model="addValue" />
          </div>
          </div>
          <div slot="footer">
            <van-button size="mini" >购买支付</van-button>
            <van-button size="mini" @click="shan(item.id)">删除</van-button>
          </div>
        </van-card>
      </div>

        <div>
            <van-goods-action>
                <van-goods-action-icon
                  icon="chat-o"
                  text="客服"
                  @click="onClickIcon"
                />
                <van-goods-action-icon
                  icon="cart-o"
                  text="购物车"
                  @click="onClickIcon"
                />
                <van-goods-action-button
                  type="warning"
                  text="加入购物车"
                  @click="onClickButton"
                />
                <van-goods-action-button
                  type="danger"
                  text="立即购买"
                  @click="onClickButton"
                />
              </van-goods-action>
        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name:'apenggouwu',
  data(){
    return{
      list:[],
      addValue:'',

    }
  },
  methods:{
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      },

      shan(id){
        console.log(id)
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

    let uid = localStorage.getItem("token")
    axios({
      method:"post",
      url:"http://106.12.52.107:8081/MeledMall/shopCar/showShopCar",
      params:{uid:uid}
    }).then((data)=>{

      this.list = data.data.info
      console.log(this.list )
    })
  }
}

</script>
<style scoped>

#top{
  margin-bottom:50px
}
</style>
