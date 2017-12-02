<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <img src="../assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>2016 vvzr MIT</p>
    </div>
    <my-dialog>
      您好呀
    </my-dialog>
  </div>
</template>
<script>
  import Dialog from './dialog';
  export default{
    components:{
      myDialog : Dialog
    }
  }
</script>
<style>
  body{
    background-color: #F5F5F5;
  }
*{
  margin: 0;
  padding: 0;
}
.app-header{
  padding:10px 50px;
  background-color: #666;
}
.app-head-inner img{
  width: 50px;
  display: inline-block;
}
.head-nav{
  float: right;
}
.nav-list > li{
  float: right;
  list-style: none;
  line-height:54px;
  padding:0 10px;
}
.nav-list > li > a{
  color: #fff;
  text-decoration: none;
}
.app-footer{
  background-color: rgba(0,0,0,.1);
  text-align: center;
  padding:25px 0;
}
</style>
