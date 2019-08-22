<template>
  <div>
    home
     <van-button type="primary" @click="top()" >点击</van-button>
      </div>
  </div>
</template>

<script>
export default {
  name:"apenghome",
  data(){
    return{
      name:"chat-o"
    }
  },
  methods:{
    top(){
      this.$router.push("/apengdenglu")
    }
  },
  mounted () {
    this.$emit("cli",this.name)
  }
}

</script>
<style scoped>
</style>
