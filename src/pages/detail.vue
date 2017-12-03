<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <span>{{productIcon}}</span>
        <ul>
          <router-link v-for="item in this.products" :to="{path:item.path}" tag="li" active-class="active">
            {{item.name}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        products:[{
          name:'数据统计',
          path:'analysis',
          active:false
        },{
          name:'数据统计',
          path:'count',
          active:false
        },{
          name:'数据统计',
          path:'forecast',
          active:false
        },{
          name:'数据统计',
          path:'publish',
          active:false
        }]
      }
    },
    computed:{
      productIcon(){
        return this.$route.path;
      }
    }
  }
</script>
<style>
  .detail-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .detail-left{
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board{
    background-color: #ffffff;
  }
  .product-board ul{
    margin-top: 20px;
  }
  .product-board li{
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .active{
    background-color: #2ecc71;
  }

</style>
