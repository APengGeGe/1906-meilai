<template>
  <div>

    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="购物车"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- <van-card
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.photo"

          /> -->

    <van-card
        :price="item.price"
        :desc="item.desc"
        :title="item.name"
        :thumb="item.photo"
      >
        <div slot="tags">
          <van-tag plain type="danger" >菜品</van-tag>
          <div slot="footer">
                <van-stepper v-model="addValue" />
          </div>
        </div>
        <div slot="footer">
          <van-button size="mini" @click="gou()">加入购物车</van-button>
        </div>
      </van-card>


      <van-goods-action class="de">
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
          @click="tiao1()"
        />
        <van-goods-action-icon
          info="5"
          icon="cart-o"
          text="购物车"
          @click="tiao()"
        />
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="tiao2()"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:"apengdetail",
  data(){
    return{
        addValue:'',
        item:[],
    }
  },
  methods:{
    tiao(){
      this.$router.push("/apenggouwu")
    },
     tiao1(){
      this.$router.push("/apengkefu")
    },
     tiao2(){
        if(localStorage.getItem("token")==null){
            this.$toast('请先登录')
        }else{
            let uid =localStorage.getItem('token')
            console.log(uid)
            // console.log(this.item.id)
            // console.log(this.item.name)
            // console.log(this.item.photo)
            // console.log(this.item.price)
            axios({
              method:"post",
              url:"http://106.12.52.107:8081/MeledMall/shopCar/addShopCar",
              params:{uid:uid,mid:this.item.id,mname:this.item.name,mphoto:this.item.photo,mprice:this.item.price}
            }).then((data)=>{
              console.log(data)
            })
        }
    },
    gou(){
        if(localStorage.getItem("token")==null){
            this.$toast('请先登录')
        }else{
            let uid =localStorage.getItem('token')
            console.log(uid)
            // console.log(this.item.id)
            // console.log(this.item.name)
            // console.log(this.item.photo)
            // console.log(this.item.price)
            axios({
              method:"post",
              url:"http://106.12.52.107:8081/MeledMall/shopCar/addShopCar",
              params:{uid:uid,mid:this.item.id,mname:this.item.name,mphoto:this.item.photo,mprice:this.item.price}
            }).then((data)=>{
              console.log(data)
            })
        }
      },
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push("/apenggouwu")
    }
  }
  ,
  mounted () {
    axios({
      method:"post",
      url:"http://106.12.52.107:8081/MeledMall/menu/child",
      params:{id:this.$route.params.id}
    }).then((data)=>{
      // console.log(data.data.info)
      this.item = data.data.info
    })
  }
}
</script>
<style scoped>

.de{
  margin-bottom:50px;
}
</style>
