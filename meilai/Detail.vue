<template>
    <div style="margin-top:50px">
        <van-card
            :price="list.price"
            :desc="list.desc"
            :title="list.name"
            :thumb="list.photo"
            >
            <div slot="footer">
                <van-stepper v-model="addValue" />
            </div>
        </van-card>
        <!-- 添加购物车 -->
        <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                text="客服"
                @click="onClickIcon1()"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                @click="onClickIcon"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="addCart()"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Detail",
    data(){
        return{
            title:'详情',
            list:[],
            addValue:'',
        }
    },
    mounted(){
      console.log('aaa')
      console.log(this.$route.query.id)
        this.$emit('toparent',this.title);
        axios({
            method:'post',
            url:'http://106.12.52.107:8081/MeledMall/menu/child',
            params:{id:this.$route.query.id}
        }).then((data)=>{
           // console.log(data)
            this.list = data.data.info
           // console.log(this.list)
        })
    },
     methods: {
         //客服：
         onClickIcon1(){

         },
         //购物车:
        onClickIcon() {
            this.$router.push('/cart');
        },
        onClickButton() {
        Toast('点击按钮');
        },
        //添加商品到购物车:


        //封装添加购物车函数：
         addCart(){

            //    console.log(this.list.id)
            //    console.log(this.list.name)
            //    console.log(this.list.photo)
            //    console.log(this.list.price)
            if(localStorage.getItem('token')==null){
                this.$toast('请先登录');
                this.$router.push('/login')
            }else{
                for(let i=0;i<this.addValue;i++){
                var uid = localStorage.getItem('token');
                axios({
                    method:'post',
                    url:'http://106.12.52.107:8081/MeledMall/shopCar/addShopCar',
                    params:{uid:uid,mid:this.list.id ,mname:this.list.name ,mphoto:this.list.photo ,mprice:this.list.price }
                }).then((data)=>{
                  //  console.log(data);
                })
            }
            }



        },
    }


}
</script>

<style scoped>

</style>
