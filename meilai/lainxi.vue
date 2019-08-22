<template>
  <div id="app">
    <van-tabs v-model="active" @click="tap">

      <van-tab :key="i" v-for="(item,i) in list" :title="item.menu" :name="item.id" >
        <router-link tag="div" :key="i" v-for="(item,i) in arr" :to='{name:"/detail",query:{id:item.id}}' >
            <van-card v-if="true"

            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.photo"
          />
        </router-link>



      </van-tab>

    </van-tabs>
  </div>

</template>

<script>

import axios from "axios"
export default {
  name:'lainxi',
  data() {
    return {
      active: 2,
      list:[],
      arr:[],
      title:"菜品"
    };
  },
  mounted(){
      axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/menu/parentMenu",

      }).then((data)=>{
        //  console.log(data.data.info)
         this.list = data.data.info
      })

      this.$emit("tit",this.title)
  },
  methods: {
      tap(name){
        var _this = this
        axios({
          method:"post",
          url:"http://106.12.52.107:8081/MeledMall/menu/childMenu",
          params:{id:name}
        }).then((data)=>{
          // console.log(data.data.info)
          this.arr=data.data.info
        })
      },
  }
}

</script>
<style scoped="">

</style>
