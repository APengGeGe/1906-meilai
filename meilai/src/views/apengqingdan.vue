<template>
  <div>
    清单
  </div>
</template>

<script>
export default {
  name:"apengqingdan",
  data(){
    return{
      name:"expand"
    }
  },
  mounted () {
    this.$emit("cli",this.name)
  }
}
</script>
<style>
</style>
