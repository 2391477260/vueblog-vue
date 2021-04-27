import axios from 'axios'
import store from './store'
import router from './router'
import Element from 'element-ui'
axios.defaults.baseURL="http://localhost:8081"

//前置拦截
axios.interceptors.request.use(config => {
    return config
})

//后置拦截
axios.interceptors.response.use(response=>{
    let  res =response.data;

    console.log('================')
    console.log(res)
    console.log('================')

    if(res.code===200){
        return response
    }else {

        Element.Message.error('错了哦，这是一条错误信息',{duration: 2*1000})

        return Promise.reject(response.data.msg)
    }
},
error => {
  console.log(error)
    if(error.response.data){
        error.message =error.response.data.msg
    }
    if(error.response.status===401){
        store.commit("REMOVE_INFO")
        router.push("/login")
    }else{
        Element.Message.error(error.message,{duration: 2*1000})
        return Promise.reject(error)
    }
}
)