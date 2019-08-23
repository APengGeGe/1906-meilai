<template>
  <div>
    <div>欢迎：{{this.$store.state.username}}</div>
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
<style scoped>
</style>
