<template>
  <div class="topbar ">
    <div class="topbar-box">
      <img class="topbar-image" src="../../assets/img/logo.png" @click="" alt="">
      <ul class="topbar-list">
        <li  class="topbar-list-item" @click="toIndex(path)" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)"
          v-for="({ title, path, fn },index) in itemModel" :key="index" >{{title}}
        </li>
      </ul>
      <div class="topbar-search">
        <input  class="topbar-search-input" placeholder=' 搜索'  onfocus=
                "this.placeholder=''"
                onblur="this.placeholder='搜索'">
        </input>
        <div class="topbar-search-image-box">
          <img class="topbar-search-image" src="../../assets/img/search.png" alt="">
        </div>
      </div>
        <div class="draw-paper-button-box-a">
          <a class="draw-paper-button-box-edit" @click="$router.push('/edit')">
            <img class="draw-image" src="../../assets/img/icon/edit_white.png" alt="">
            <span class="draw-image-edit">写博客</span>
          </a>
        </div>
      <div class="draw-paper-button-box-b" v-show="loginButtonIsShow" >
        <a class="draw-paper-button-box-login" @click="showDialog" >
          <span class="draw-image-login" >登录</span>
        </a>
      </div>
<!--      <div class="draw-paper-button-box-c" v-show="!loginButtonIsShow" @click="showDialog">
       <h2>头像</h2>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props:{
    loginButtonIsShow:{
      type:Boolean,
      default:true,
    }
  },
  data () {
    return {
      searchFocus: false,
      itemModel: [
        { title: '首页', path: '/', fn: 'index' },
        { title: '文章', path: '/blogs', fn: 'toCatalogue' },
        { title: '关于', path: '/about', fn: 'toAbout' }
      ],
    }
  },
  created() {
    this.isLogin();
  },
  methods: {
    changeActive(e){
      e.currentTarget.className = 'topbar-list-item-change';
    },
    removeActive(e){
      e.currentTarget.className = 'topbar-list-item';
    },
    onItemClick: function (fn) {
      this[fn]()
    },

    // 前往指定页面
    toIndex(path) {
      this.$router.replace(path)
    },
    //点击登录按钮后显示登录框，向父组件发送请求
    showDialog(){
      console.log("已点击");
      this.$emit('showDialog',"打开登录框")
    },
    //判断是否登录
    isLogin(){
      if(localStorage.getItem('token')==='123456'){
        this.loginButtonIsShow=false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
.topbar {
  height: 10%;
  width: 100%;
  box-shadow: 0 1px 3px ;
}
.topbar-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar-image{
  cursor: pointer;
  height: 30px;
  border-style: none;
  padding-left: 50px;
  margin: 0;
  vertical-align: middle;
  user-select: none;
}
.topbar-list{
  margin-left: 25px;
  font-size: 15px;
  display: flex;
  height: 100%;
  color: #8590a6;
}
.topbar-list-item{
  font-size: 15px;
  color: #8590a6;
  box-sizing: border-box;
  border-bottom: 4px solid #fff;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topbar-list-item-change{
  font-size: 15px;
  color: #333333;
  box-sizing: border-box;
  border-bottom: 4px solid #4a3bff;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topbar-search{
  margin-left: 100px;
  display: flex;
  width: 400px;
}
.topbar-search-input{
  border-radius: 100px;
  border: 1px solid #ebebeb;
  background-color: #f6f6f6;
  font-size: 14px;
  flex: 1;
  height: 24px;
  color: #333;
}
.topbar-search-image-box{
  box-sizing: content-box;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-color: #4a3bff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 50px;
  color: #fff;
  background: linear-gradient(90deg,#56ccf2,#2f80ed);;
}
.topbar-search-image{
  height: 20px;
  border-style: none;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;

}
.draw-paper-button-box-edit{
  text-decoration-line: none;
  padding: 5px 6px;
  color: #fff;
  font-size: 13px;
  background: linear-gradient(90deg,#56ccf2,#2f80ed);
  border-radius: 15px;
  min-width: 90px;
}
.draw-paper-button-box-login{
  text-decoration-line: none;
  padding: 5px 5px;
  color: #fff;
  font-size: 13px;
  background: linear-gradient(90deg,#56ccf2,#2f80ed);
  border-radius: 15px;
  min-width: 90px;
}
.draw-paper-button-box-a{
  height: 16px;
  margin-bottom: 12px;
}
.draw-paper-button-box-b{
  height: 16px;
  margin-bottom: 12px;
}
.draw-image{
  height: 16px;
  border-style: none;
  padding: 0;
  vertical-align: middle;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.draw-image-edit{
  margin-left: 10px;
  font-size: 12px;
}
.draw-image-login{
  font-size: 12px;
}
button, input {
  overflow: visible;
}
</style>
