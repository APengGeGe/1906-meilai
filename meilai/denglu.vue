<template>

	<div id="top">

		<img v-for="img in imageList" v-lazy="img" class="aimg"/>
		<div id="aa">
			<van-nav-bar
			  title="登录"
			:fixed="true"
			class ="bar"
			:size="20"
			/>
		</div>

		<div id="bb">

		<van-cell-group>

		  <van-field
		    v-model="username"
		    required
		    clearable
		    label="用户名"
		    right-icon="friends"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('question')"
		     class="bug"
		  />

		</van-cell-group>

		</div>
		<div id="cc">
			<van-cell-group>

			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    right-icon="browsing-history-o"

			    placeholder="请输入密码"
			    required
			    class="bug"
			  />
			</van-cell-group>
		</div>
		<van-button type="primary" class="deng" @click="top()">登录</van-button>
		<van-button type="primary" class="deng"  to="/zhuce">注册</van-button>
	</div>
</template>

<script>
	import axios from "axios"
	import {mapState,mapGetters,mapActions} from "vuex"
	export default{
		name:'denglu',
		data(){
			return{
				 imageList: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=204603000,1708848141&fm=26&gp=0.jpg'
			      ],
			      username:'',
			      password:''
			}
		},
		methods: {
			...mapActions(["login"]),
		    onClickLeft() {
		      this.$router.push("/denglu")
		    },
		    top(){
				var _this = this
				axios({
				method:"post",
			 	url:"http://106.12.52.107:8081/MeledMall/user/login",
			 	params:{phonenum:this.username,password:this.password}
			 }).then((data)=>{
				 console.log(data.data)
				 if(data.data.code ==1){
					_this.$router.push("/shouye")
				 }
				 if(data.data.code ==0){
					 console.log("登录失败")
				 }

			 })
		   		this.$store.commit("login",this.username);
		    }

		  },
		mounted(){

		}
	}

</script>

<style>

	*{
		margin:0;padding:0
	}
	#aa{
		background: pink;
	}
	.bar{background: #21B384;color:#0000FF;}
	.aimg{
		width: 100%;
		height:100%;
		position: fixed;
		top:0;
		left:0
	}
	#bb{
		margin-top:250px
	}
	#cc{
		margin-top:30px
	}
	.bug{
		background: #ccc;
		opacity: 0.5;
	}
	.deng{
		background: #00B5F1;
		margin:50px 50px;
		border-radius:50px ;
	}

</style>
