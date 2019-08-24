<template>
  <div id="tit">
    <div>
      <div>欢迎：{{this.$store.state.username}}</div>
      <van-tabs v-model="active" @click="tap">

      <van-tab :key="i" v-for="(item,i) in list" :title="item.menu" :name="item.id" >
            <van-card
            v-for="(item,i) in arr"
            :key="i"
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.photo"
            @click="tep(item.id)"
          />

      </van-tab>

    </van-tabs>
    </div>



  </div>
</template>

<script>
import axios from "axios"
export default {
  name:"apengpyou",
  data(){
    return{
      name:"expand",
      active:2,
       list:[],
      arr:[],
    }
  },
  mounted () {
       axios({
        method:"post",
        url:"http://106.12.52.107:8081/MeledMall/menu/parentMenu",
      }).then((data)=>{
         console.log(data.data.info)
         this.list = data.data.info
      })

    this.$emit("cli",this.name)
    console.log(this.$store.state.username)
  },
  methods:{
    tep(id){
      this.$router.push("/detail/"+id)
    },
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
<style scoped>
#tit{
  overflow: auto
}

</style>
