<template>
  <div>
    <div id="tu">
        <div id="jian">
            <van-icon name="comment" class="tu1" @click="cli()"/>
            <p>常见问题</p>
        </div>
        <div id="jian">
             <van-icon name="service" class="tu2" @click="cli1()"/>
            <p>在线客服</p>
        </div>
    </div>

      <van-cell title="反馈内容" is-link />
      <van-cell title="服务条款" is-link />
      <van-cell title="售后规则" is-link />
      <van-cell title="运费规则" is-link />
  </div>
</template>

<script>
export default {
    name:"kefu",
    data(){
      return{
          title:"客服"
      }
    },
    methods:{
      cli(){
        this.$router.push("/changj")
      },
      cli1(){
        this.$router.push("/meiri")
      },
      onClickLeft() {
       this.$router.go(-1)
      }
    },
    mounted () {

        this.$emit("ccc",this.title)
    }
}

</script>
<style scoped>

#tu{
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin-top:30px;
  border-bottom:1px solid #ccc
}
#jian{
  display: flex;
  flex-direction: column;
   justify-content:center;
  align-items: center
}
.tu1{
  font-size:60px;
}
.tu2{
  font-size:60px;
}
</style>
