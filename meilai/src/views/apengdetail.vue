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
        :num="num"
        :price="item.price"
        :desc="item.desc"
        :title="item.name"
        :thumb="item.photo"
      >
        <div slot="tags">
          <van-tag plain type="danger" >菜品</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini" @click="gou(item.id,item.photo,item.name,item.price)">加入购物车</van-button>
        </div>
      </van-card>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:"apengdetail",
  data(){
    return{
        item:[],
        num:""
    }
  },
  mounted () {
    axios({
      method:"post",
      url:"http://106.12.52.107:8081/MeledMall/menu/child",
      params:{id:this.$route.params.id}
    }).then((data)=>{
      // console.log(data.data.info)
      this.item = data.data.info
    })

  },
  methods:{
    gou(){

        if(localStorage.getItem("token")==null){
            this.$toast('请先登录')

        }else{
          for(let i=0;i<this.num;i++ ){

         }
          var uid =localStorage.getItem('token')
          console.log(uid)
          axios({
            method:"post",
            url:"http://106.12.52.107:8081/MeledMall/shopCar/addShopCar",
            params:{uid:uid,mid:this.item.id,mname:this.item.name,mphoto:this.item.photo,mprice:this.item.price}
          }).then((data)=>{
            console.log(data)
            console.log(this.item.id)
          })
        }
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push("/gouwuche")
    }
  },
}
</script>
<style>
</style>
