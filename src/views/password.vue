<template>
  <div class="container">
         <header>
          <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
        </header>

        <section>
          <van-cell-group>
            <van-field
              type="password"
              v-model="password"
              required
              clearable
              label="旧密码"
              right-icon="question-o"
              placeholder="请输入旧密码"
            />

            <van-field
              v-model="xpassword"
              type="password"
              label="新密码"
              placeholder="请输入新密码"
              required
            />
          </van-cell-group>
        <van-button type="primary" size="large">确认修改</van-button>
        </section>
  </div>
</template>

<script>
export default {
  name:'password',
  data(){
    return{
      title:'修改密码',
      password:'',
      xpassword:'',
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
