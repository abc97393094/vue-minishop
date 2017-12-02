<template>
  <div>
    <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover"  @click="closeMyself">
      </div>
      <div class="dialog-content">
        <a class="dialog-close" href="#" @click="closeMyself">x</a>
        <slot>empty</slot>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    props:{
      isShow:{
        type:Boolean,
      default:false
      }
    },
    methods:{
      closeMyself(){
        this.$emit('on-close')
      }
    }
  }
</script>
<style scoped>
  .dialog-wrap{
    position: fixed;
    width: 100%;
    height:100%;

  }
  .dialog-cover{
    background-color: rgba(0,0,0,.3);
    position: fixed;
    width: 100%;
    height:100%;
    z-index: 5;
    top: 0;
    left:0;
  }
  .dialog-content{
    position: fixed;
    top: 20%;
    left:50%;
    margin-left:-25%;
    width: 50%;
    padding: 2%;
    max-height: 50%;
    line-height: 1.6;
    border:2px solid #464068;
    background-color: #fff;
    z-index: 10;
    overflow: auto;
  }
  .dialog-close{
    position: absolute;
    right:2%;
    top:0px;
  }
</style>
