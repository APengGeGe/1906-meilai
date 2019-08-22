<template>
    <div id="cart">

        <div class='cart_Top'>
            <van-nav-bar
            title="购物车"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            
            />
        </div>
        <div class="cart_Mid">
             <router-view></router-view>
           
        </div>
        



     

        

    </div>
</template>

<script>
export default {
    name:"Cart",
    data(){
        return{
            radio:1,
            checked: true,
        }
    },
    methods:{
        onClickLeft() {
           this.$router.go(-1);
        },
       
        
    }
}
</script>

<style scope="">
    *{
        margin: 0;
        padding: 0;
    }
   #cart {
       width: 100%;
       height: 100%;
    }
     #cart{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .cart_Mid{
        flex: 1;
        /* background: red; */
        overflow: auto

    }
    .cart_Top{
        width: 100%;
        height: 46px;
        /* background: pink; */
    }
    
</style>
