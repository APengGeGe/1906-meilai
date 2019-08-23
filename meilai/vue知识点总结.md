数据双向绑定原理  数据劫持 订阅者模式 通过 object geters seters
数据发生改变时通知订阅者  observer 监听数据变化  coplited  watcher  mvvm视图
    核心思想             虚拟DEMO
    运行速度快 ·        组件化组件视图
    v-xxx               核心库   丰富的插件
    {{}}                jsx    简单的模板
    子传父 :@parent = "tap" this.$emit("parent",数据) 父tap(msg){变量=接受msg}
    监听  watch
    过滤器  函数内部  filters:{}     使用{{title | 名}}
    请求   fetch   axios jsonp  XHR  ajax
    并发请求  axios.all([aa(),bb()]).then(axios.spread(function(aa,bb)))
    非父组件 var vm = new Vue({})  vm.$emit("aa",this.title)  接受vm.$on("aa",function(data){})
    获取父组件  this.#parent()
    获取子组件  添加 ref="tit"  获取 this.$refs.tit()
    mixins混入   var mixins  = {}   var app = new Vue({mixins:[mixins]})
    this.$nexttick(function(){ consoelog()}) demo更新完获取demo元素
    slot占位符  <v-xxx><p slot="tit"></p></v-xxx>  <slot name="tit"></slot>
    自定义指令 Vue.directive("color",{inserted:function(el){}})
    directives:{inserted:function(el){}}  <p v-color></p>

动画   v-if="show"  @click="show=!show"
路由守卫全局   meat:{title:"xxx"}    router.beforeEach(function(to,from,next){})
路由嵌套          this.$route.push("/路径")

tag : 改变标签名
params传参  <router-link :to="'/login/'+item.id" v-for="item in list" tag="li">
            path:"/login/:id"    接受数据this.$route.params.id
query传参   <router-link :to="{name:"/login",query:{}}" v-for="item in list" tag="li">
             path:"/login" name:"/login"   接受数据this.$route.query.id
   @click = "top(item.id)"  top(id){this.$router.push("/login/"+id)}      {path:'/login/:id'}  this.$route.params.id

swiper轮播插件     ani属性名

/nprogress
//import nprogress from "router-nprogress"
//
//start
//done
封装请求接口
config.js    API_ROOT:'"url地址"'
let base = process.env.API_ROOT

index.js
import axios from "axios"
export const post =(url,parmas)={return axios(`${base}${url}`,parmas).then(res=>res.data})

api.js
import * as API from "./index"
export default{
    get1:params=>{
        return API.GET('/detail.php',params)
    }
}




eval()   JSON.parse 字符串转对象













##封装拖拽
directives:{
                "move":function(el){
                    el.onmousedown=function(e){
                        var e = e||event
                        var x = e.offsetX;
                        var y = e.offsetY;
                        document.onmousemove = function(e){
                            var e = e||event
                            el.style.left = e.clientX - x +"px"
                            el.style.top = e.clientY - y +"px"
                        }
                    }
                    document.onmouseup = function(){
                        document.onmousemove = null
                    }
                }
            }




https://codepen.io/btc022003/pen/ZdyMdg 可编辑的表格
https://codepen.io/btc022003/pen/QRQpbr 三级联动demo
https://codepen.io/btc022003/pen/VoYLvY vue宽度改变动画
https://codepen.io/btc022003/pen/YmNYvK 底部导航鼠标移
