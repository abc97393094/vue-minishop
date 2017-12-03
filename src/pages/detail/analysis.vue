<template>
  <div>
    <div class="detail-top">
      <h2>数据统计</h2>
      <h3>历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料历史资料</h3>
      <div class="buy-count">
        <span>购买数量：</span>
        <VSelectclick :selections="productTest"></VSelectclick>
      </div>
      <div class="product-class">
        <span>产品类型：</span>
        <VSelection :selections="productTest"></VSelection>
      </div>
      <div class="price-sum">
        <span>总价：</span>
        <span>500</span>
      </div>
      <a href="#">立即购买</a>
    </div>
  </div>
</template>
<script>
  import VSelection from '../../components/selection.vue'
  import VSelectclick from '../../components/selectClick.vue'
  export default {
    components:{
      VSelection,VSelectclick
    },
    data() {
      return {
        buyNum:0,
        buyType:{},
        version:[],
        period:{},
        productTest:[{
          label:'入门',value:0
        },{
          label:'中级',value:1
        },{
          label:'高级',value:2
        }]
      }
    }
  }
</script>
<style>
  .detail-top >div >span{
    display: inline-block;
    width: 100px;
  }
  .detail-top >a{
    display: inline-block;
    padding:5px 25px;
    color: #fff;
    background-color: #2ecc71;
    font-size: 14px;
    text-decoration: none;
  }
</style>
