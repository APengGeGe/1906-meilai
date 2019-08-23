<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="为我推荐">
            <van-card
                v-for="(item,i) in list"
                  :key="i"
                  :price="item.price"
                  :desc="item.desc"
                  :title="item.name"
                  :thumb="item.photo"

              >
                <div slot="tags">
                  <van-tag plain type="danger" @click="lol(item.id)">商品详情</van-tag>
                </div>
                <div slot="footer">

                  <van-button size="mini" @click="gou(item.id,item.photo,item.name,item.price)">加入购物车</van-button>
                </div>
              </van-card>
      </van-tab>
      <van-tab title="常用清单">
            <van-card
              v-for="(item,i) in arr"
              :key="i"
              :price="item.price"
              :desc="item.desc"
              :title="item.name"
              :thumb="item.photo"
              @click="lol(item.id)"
            />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name:"apengqingdan",
  data(){
    return{
      active: 2,
      list:[],
      arr:[],
      name:"expand"
    }
  },
  methods:{
    lol(id){
      this.$router.push("/detail/"+id)
    },
     gou(id,img,name,price){
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
              params:{uid:uid,mid:id,mname:name,mphoto:img,mprice:price}
            }).then((data)=>{
              console.log(data)
            })
        }
      },
  },
  mounted () {
      axios({
        method:"post",
        url:'http://106.12.52.107:8081/MeledMall/menu/recommend'
      }).then((data)=>{

        this.list = data.data.info

      })

      let uid = localStorage.getItem("token")
      axios({
        method:"post",
        url:'http://106.12.52.107:8081/MeledMall/menu/common',
        params:{id:uid}
      }).then((data)=>{

        // this.list = data.data.info
        console.log(data.data.info)
        this.arr = data.data.info
      })

    this.$emit("cli",this.name)
  }
}
</script>
<style scoped>
</style>
