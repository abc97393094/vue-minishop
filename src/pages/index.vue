<template>
  <div>
    <div class="main inner">
      <div class="slider-bar">
        <div class="slider">
          <div class="big-title">
            {{alwaysProduct}}
          </div>
          <template v-for="product in productList">
            <h3>{{ product.title }}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
                <i v-if="item.hot" class="hot-tag">HOT</i>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </template>
        </div>
        <div class="slider">
          <div class="big-title">
            {{newMsg}}
          </div>
            <ul>
              <li v-for="item in newMessage">
                <a class="see-link" :href="item.url">{{item.name}}</a>
                <i v-if="item.hot" class="hot-tag">HOT</i>
              </li>
            </ul>
        </div>
      </div>
      <div class="index-right">
        <slider-show :slides="slides" :inv="invTime" @onchange="dosomethinkOnSlideChange"></slider-show>
        <div class="index-board-item" :class="{'line-lase':index%2==0}" v-for="(item,index) in boardList">
           <p  class="item-title">
             {{item.title}}
           </p>
          <p class="item-desc">
            {{item.description}}
          </p>
          <a class="buy" href="#">立即购买</a>



        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sliderShow from '@/components/sliderShow';

  export default {
    components:{
      sliderShow
    },
    created:function () {
      this.$http.get('http://localhost:3000/newmessage')
        .then((res) =>{
          this.newMessage = res.data;
        }, (err)=> {
          console.log(err)
        })
    },
    data(){
      return{
        invTime:5000,
        slides:[
          {
            src:require('../assets/pic1.jpeg'),
            title:'图片1',
            href:'detail/analysis'
          },
          {
            src:require('../assets/pic2.jpeg'),
            title:'图片2',
            href:'detail/analysis'
          },
          {
            src:require('../assets/pic3.jpeg'),
            title:'图片3',
            href:'detail/analysis'
          }

        ],
        alwaysProduct:'全部产品',
        newMsg:'最新消息',
        newMessage:[],
        productList:{
          pc:{
            title:'PC产品',
            list:[{
              name:'数据分析',
              url:'http://www.shujufenxi.com'
              },
              {
                name:'数据分析',
                url:'http://www.shujufenxi.com',
                hot:true
              },
              {
                name:'数据分析',
                url:'http://www.shujufenxi.com'
              },
              {
                name:'数据分析',
                url:'http://www.shujufenxi.com'
              }]
          },
          app:{
            title:'应用类',
            last:true,
            list:[{
              name:'91助手',
              url:'http://www.shujufenxi.com'
            },
              {
                name:'91助手',
                url:'http://www.shujufenxi.com'
              },
              {
                name:'91助手',
                url:'http://www.shujufenxi.com'
              },
              {
                name:'91助手',
                url:'http://www.shujufenxi.com'
              }]
          }
        },
        boardList:[{
          title:'开放产品',
          description:'开放产品是一款开发产品',
          saleout:false
        },{
          title:'开放产品',
          description:'开放产品是一款开发产品',
          saleout:false
        },{
          title:'开放产品',
          description:'开放产品是一款开发产品',
          saleout:false
        },{
          title:'开放产品',
          description:'开放产品是一款开发产品',
          saleout:false
        }]
      }
    },
    methods:{
      dosomethinkOnSlideChange(index){
        console.log('dosomethinkOnSlideChange'+index+' run!')
      }
    }
  }
</script>
<style scoped>
  .main{
    width: 720px;
    margin: 10px auto 0;
    overflow: hidden;
  }
  .slider-bar{
    float: left;
  }
  .index-right{
    width: 500px;
    float: right;

  }
  .slider{
    width: 200px;
    background-color: #fff;
    margin-bottom: 20px;
  }
 .big-title{
   background-color: #2ecc71;
   color: #fff;
   padding:5px 10px;
   font-size: 16px;
   font-weight: 700;
 }
  .slider h3{
    font-size: 14px;
    padding:8px 10px;
  }
  .slider ul > li{
    padding:2px 12px;
  }
  .slider ul > li > a{
    font-size: 14px;
    color: #555;
    text-decoration: none;
  }
  .hot-tag{
    background-color: red;
    color: #fff;
    font-size: 10px;
    font-style: inherit;
  }
  .see-link{

  }

  /*右边模块*/
  .index-board-item{
    display: inline-block;
    padding:15px 20px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .index-board-item>.item-title{
    font-size: 16px;
    font-weight: 700;
    padding-bottom:15px;

  }
  .index-board-item>.item-desc{
    font-size: 14px;
    padding-bottom:15px;
  }
  .index-board-item>.buy{
    color: #fff;
    background-color: #2ecc71;
    display: inline-block;
    padding:8px 15px;
    text-decoration: none;
    font-size: 12px;
  }
  /* 第一列元素向右边界20px*/
  .line-lase{
    margin-right:20px;
  }


</style>
