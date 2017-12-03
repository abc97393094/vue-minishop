<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <router-link :to="{path:'/'}">
        <img src="../assets/logo.png" alt="">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if="this.username !== ''"><a href="#">{{this.username}}</a></li>
            <li v-if="this.username !== ''"><a href="#" @click="regClick">退出</a></li>
            <li><a href="#" @click="aboutClick">关于</a></li>
            <li v-if="this.username === ''"><a href="#" @click="loginClick">注册</a></li>
            <li v-if="this.username === ''"><a href="#" @click="regClick">登录</a></li>
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
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>鉴于百度以非人工检索方式、根据您键入的关键字自动生成到第三方网页的链接，除百度注明之服务条款外，其他一切因使用百度而可能遭致的意外、疏忽、侵权及其造成的损失（包括因下载被搜索链接到的第三方网站内容而感染电脑病毒），百度对其概不负责，亦不承担任何法律责任。</p>
    </my-dialog>
    <my-dialog :is-show="isShowLoginDialog" @on-close="closeDialog('isShowLoginDialog')">
      reg
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <login-form @has-log="onSuccessLog"></login-form>
    </my-dialog>
  </div>
</template>
<script>
  import Dialog from './dialog';
  import loginForm from './loginForm.vue';
  export default{
    components:{
      myDialog : Dialog,loginForm
    },
    data(){
      return{
        isShowAboutDialog:false,
        isShowLoginDialog:false,
        isShowRegDialog:false,
        username:''
      }
    },
    methods:{
      aboutClick(){
        this.isShowAboutDialog = true;
      },
      closeDialog(attr){
        this[attr]=false;
      },
      loginClick(){
        this.isShowLoginDialog = true;

      },
      regClick(){
        this.isShowRegDialog = true;

      },
      onSuccessLog(data){
        this.username = data.user;
        closeDialog(isShowRegDialog)
      }
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
  /* 注册登录样式*/
  .g-form-label{
    width: 50px;
    display: inline-block;
    font-size: 12px;
    padding-bottom: 10px;
  }
  .g-form-input{
    display: inline-block;
  }
  .g-form-btn{
    margin-left: 55px;
  }
  .g-form-btn a{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding:5px 25px;
    background-color: #2ecc71;
    font-size: 14px;
  }
</style>
