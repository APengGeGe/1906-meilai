<template>
  <div>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @input="ttp()"
      >
      <div slot="action" @click="onSearch">取消</div>
      </van-search>
      <ul ref="tit" id="cli">
        <li v-for="(item,i) in list1" :key="i" @click="mvp(item.id)">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name:"apengshousuo",
  data(){
    return{
        value:'',
        arr:[],
        list:[],

    }
  },
  methods:{
    onSearch(){
      this.$router.push("/apengshouye")
    },
    mvp(id){
      console.log(id)
      this.$router.push("/detail/"+id)

    },
    ttp(){
      if(this.value == ""){
          this.$refs.tit.style.display = "none"
      }else{
          this.$refs.tit.style.display = "block"
      }
    }
  },
  mounted () {

       axios({
            method:"post",
            url:'http://106.12.52.107:8081/MeledMall/menu/selectChild',

        }).then((data)=>{
            this.arr =data.data.info
            console.log(this.arr)
        })
  },
  computed: {
    list1(){
        let list = []
      this.arr.map((item)=>{
        if(item.name.search(this.value)!=-1){
            list.push(item)
        }
      })
      return list
    }
  }
}

</script>
<style scoped>
#cli{
  display: none
}
li{
  height:50px;
  border-top:1px solid orange;
  font-size:20px

}
</style>
