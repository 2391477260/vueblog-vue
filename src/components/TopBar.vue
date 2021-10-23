<template>
  <div class="topbar ">
    <div class="topbar-box">
      <img class="topbar-image" src="../assets/img/logo.png" @click="" alt="">
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
          <img class="topbar-search-image" src="../assets/img/search.png" alt="">
        </div>
      </div>
      <TopBarProfile class="flex flex-items-center" />
    </div>
  </div>
</template>

<script>
import TopBarProfile from "./TopBarProfile";
import BaseInput from "./Base/BaseInput";
export default {
  name: "TopBar",
  components: {TopBarProfile,BaseInput},
  data: function () {
    return {
      searchFocus: false,
      itemModel: [
        { title: '首页', path: '/', fn: 'index' },
        { title: '文章', path: '/blogs', fn: 'toCatalogue' },
        { title: '关于', path: '/about', fn: 'toAbout' }
      ],
      login: localStorage.uid
    }
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
  width: 1200px;
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
  transition: all .2s linear;
  align-items: center;
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
  background-color: #4a3bff;
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
button, input {
  overflow: visible;
}
</style>
