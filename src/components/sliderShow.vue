<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
        </transition>
      </a>
    </div>
    <div class="slide-desc">
      <span>{{slides[nowIndex].title}}</span>
      <ul>
        <li><a @click="goto(prevIndex)" href="#">&lt;</a></li>
        <li v-for="(item,index) in slides">
          <a :class="{on : index ===nowIndex}" @mouseover="goto(index)" href="#">{{index+1}}</a>
        </li>
        <li><a @click="goto(nextIndex)" href="#">&gt;</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        hello:'hello~',
        nowIndex:0,
        isShow:true
      }
    },
    props:{
      slides:{
        type:Array,
        default:[]
      },
      inv:{
        type:Number,
        default:1000
      }
    },
    methods:{
      goto(index){
        this.isShow=false;
        setTimeout(()=>{
          this.isShow=true;
          this.nowIndex=index;
          this.$emit('onchange',index)
        },10)
      },
      runInv(){
        this.invId = setInterval(()=>{
          this.goto(this.nextIndex)
        },this.inv)
      },
      clearInv(){
        clearInterval(this.invId);
      }
    },
    mounted(){
      this.runInv();
    },
    computed:{
      prevIndex(){
        if(this.nowIndex===0){
          return this.slides.length - 1;
        }else{
          return this.nowIndex - 1;
        }
      },
      nextIndex(){
        if(this.nowIndex===this.slides.length - 1){
          return 0;
        }else{
          return this.nowIndex + 1;
        }
      }
    }
  }
</script>
<style scoped>
  .slide-show{
    width: 100%;
    height: 250px;
    position: relative;
  }
  .slide-img{
    width: 200%;
    overflow: hidden;
  }
  .slide-img img{
    width: 50%;
    height:250px;
    float: left;
  }
  .slide-desc{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
  }
  .slide-desc span{
    display: inline-block;
    color: #fff;
    padding:5px 5px;
  }
  .slide-desc ul>li{
    float: left;
    list-style: none;
    padding:5px 5px;
  }
  .slide-desc ul>li>a{
    color: #fff;
    text-decoration: none;
  }
  .slide-desc ul{
    float: right;
  }
  .on{
    background-color: rgba(255,255,255,.2);
  }
  /*动画效果*/
  .slide-trans-enter-active{
    transition: all .5s;
  }
  .slide-trans-enter{
    opacity: 0;
  }
  .slide-trans-old-leave-active{
    /*transition: all .5s;*/
    opacity:1;
  }
</style>
