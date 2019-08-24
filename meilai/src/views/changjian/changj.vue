<template>
  <div>
      <van-cell value="一 ,账户问题" class="wen"/>
      <van-cell value="二 ,订购问题" class="wen1"/>
      <van-cell value="三 ,发票问题" class="wen2"/>
      <van-cell value="四 ,配送问题" class="wen3"/>
      <van-cell value="五 ,退货问题" class="wen4"/>
  </div>
</template>

<script>
export default {
    name:"kefu",
    data(){
      return{
          title:"常见问题"
      }
    },
    methods:{

    },
    mounted () {

        this.$emit("ccc",this.title)
    }
}

</script>
<style scoped>
.wen{
  border:1px solid #ccc
}
.wen1{
  border:1px solid #ccc;
  margin-top:300px;
}
.wen2{
  border:1px solid #ccc;
  margin-top:300px;
}
.wen3{
  border:1px solid #ccc;
  margin-top:300px;
}
.wen4{
  border:1px solid #ccc;
  margin-top:300px;
}
</style>
