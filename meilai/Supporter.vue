<template>
	<div id="Super">
		<van-nav-bar
		  :title="title"
		  left-arrow
		  :fixed="true"
		  @click-left="onClickLeft"
		/>
    <router-view @toparent='getval'></router-view>
	</div>

</template>

<script>
	export default {
		name:"Supporter",
		data(){
			return{
				title:'',
			}
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1)
        },
         getval(msg){
				this.title=msg
			}

		},
		mounted(){

		}
	}
</script>

<style scoped>
#Super{
	height: 100%;
}
</style>
