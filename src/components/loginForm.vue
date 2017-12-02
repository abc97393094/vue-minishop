<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="error">{{ userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <div class="error">{{passwordErrors.errorText}}</div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a href="#" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        usernameModel:'',
        passwordModel:'',
        userFlag:false
      }
    },
    methods:{
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status){

        }else{
          this.$http.post('http://localhost:3000/users',{user:this.usernameModel,password:this.passwordModel})
            .then((res)=>{
              this.$emit('has-log',res.data)
            },(error)=>{
            console.log(error)
            })
        }
      }
    },
    computed:{
      userErrors() {
        let errorText,status
        if(!/@/g.test(this.usernameModel)){
          status = false;
          errorText = '不包含@'
        }else{
          status = true;
        }
        if(!this.userFlag){
          errorText=''
          this.userFlag=true;
        }
        return{
          status,
          errorText
        }
      },
      passwordErrors(){
        let errorText,status
        if(!/^\w{1,6}$/g.test(this.passwordModel)){
          status=false
          errorText='密码不是1-6位'
        }else{
          status=true
          errorText=''
        }
        return{
          status,
          errorText
        }
      }
    }
  }
</script>
