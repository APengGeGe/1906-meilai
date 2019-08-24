<template>
  <div>
     <van-nav-bar
      title="消息中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      class="ti"
    />
    <div id="car">
        <div id="car1">
            <div id="car2"></div>
            <div id="car3">
               <p>订单通知</p>
               <span>暂无更多内容</span>
            </div>
        </div>
        <div id="car1">
            <div id="car2"></div>
            <div id="car3">
               <p>我的资产</p>
               <span>暂无更多内容</span>
            </div>
        </div>
        <div id="car1">
            <div id="car2"></div>
            <div id="car3">
               <p>优惠促销</p>
               <span>暂无更多内容</span>
            </div>
        </div>
        <div id="car1">
            <div id="car2"></div>
            <div id="car3">
               <p>服务通知</p>
               <span>暂无更多内容</span>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name:"apengxiaoxi",
  data(){
    return{

    }
  },
  methods:{
      onClickLeft(){
        this.$router.go(-1)
      }
  },
  mounted () {

  }
}

</script>
<style scoped>


#car{
  margin-top:46px;
}

#car1{
  width:100%;
  height:100px;
  border-bottom:1px solid #cccccc;
  display:flex;
  justify-content:space-between
}
#car2{
  width:60px;
  height:60px;
  border:1px solid #cccccc;
  border-radius: 10px;
  float: left;
  margin:15px 20px 0 30px;

}
#car3{
  flex:1;
  float: left;
  display:flex;
  flex-direction: column;
  justify-content:center;
}
p{
  font-size:15px;
  color:cadetblue
}
span{
  color: #cccccc
}
.ti{
    background: #cccccc
}
</style>
