<template>
  <div>
    <ul>
      <li v-for="(item,index) in selections" :class="{active:index===nowIndex}" @click="chosenSelection(index)">{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        nowIndex:0
      }
    },
    props:{
      selections:{
        type:Array,
        default:[{
          label:'text',
          value:0
        }]
      }
    },
    methods:{
      chosenSelection(index){
        this.nowIndex = index;
        this.$emit('on-change',index)
      }
    }
  }
</script>
<style scoped>
ul > li{
  float: left;
  list-style: none;
  display: inline-block;
  padding:2px 5px;
  background-color: #fff;
  margin-right: 3px;
  border: 1px solid #999;
  border-radius: 3px;
}
ul>li.active{
  background-color: #2ecc71;
}
</style>
