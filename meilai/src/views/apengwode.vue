<template>
  <div>
    我的
  </div>
</template>

<script>
export default {
  name:"apengpyou",
  data(){
    return{
      name:"user-circle-o"
    }
  },
  mounted () {
    this.$emit("cli",this.name)
  }
}
</script>
<style>
</style>
