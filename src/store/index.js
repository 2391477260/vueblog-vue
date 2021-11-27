import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    //不改跳转页面后登录状态会变
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
    articleDates:[]
  },
  mutations: {
    //set
    SET_TOKEN: (state,token) =>{
      state.token = token;
      localStorage.setItem("token",token)
    },
    SET_USERINFO: (state,userInfo) =>{
      state.userInfo =userInfo;
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state ,token)=>{
      state.token='';
      state.userInfo = {};
      localStorage.setItem("token",'');
      sessionStorage.setItem("userInfo",JSON.stringify(''))
    }
  },
  getters:{
    //get
    getUser: state =>{
      return state.userInfo
    }

  },
  actions: {
  },
  modules: {
  }
})
