<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover">
      </div>
      <div class="dialog-content">
        <a class="dialog-close" href="#">x</a>
        <slot>empty</slot>
      </div>

    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .dialog-wrap{
    position: fixed;
    width: 100%;
    height:100%;
    top: 0;
    left:0;
  }
  .dialog-cover{
    background-color: rgba(0,0,0,.3);
    position: fixed;
    width: 100%;
    height:100%;
    z-index: 5;
  }
  .dialog-content{
    position: absolute;
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
  }
  .dialog-close{
    position: absolute;
    right:2%;
    top:0px;
  }
</style>
