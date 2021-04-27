<template>
    <div class="pannel">
        <div class="pannel-inner">
            <div class="pannel-header">
                <span  style="cursor:pointer;color:#409eff;">
                    注册新用户
                </span>
            </div>
            <el-input size="medium" v-model="username" placeholder="请输入用户名" style="margin-bottom: 5px;"></el-input>
            <el-input size="medium" type="password" v-model="password" placeholder="请输入密码" style="margin-bottom: 5px;"></el-input>
            <el-input size="medium" type="password" v-model="re_password" placeholder="请再次输入密码" style="margin-bottom: 5px;"></el-input>
            <el-input size="medium" type="email" v-model="email"  placeholder="请输入注册邮箱" style="margin-bottom: 5px;"></el-input>
            <el-input size="small"  type="email" v-model="Jycode" placeholder="验证码功能还未实现，无需填写" style="margin-bottom: 5px;"></el-input>
            <el-button type="primary" size="medium" style="width: 40%; margin-top: 17px; margin-left: 5%;" @click="register">注册</el-button>
            <el-button type="primary" size="medium" style="width: 40%; margin-top: 17px;margin-right: 5%;" @click="returnLogin">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register.vue",
        data() {
            return {
                    username: '',
                    password: '',
                    re_password:'',
                    email: '',
                    Jycode:''
            }
        },
        methods:{
            returnLogin(){
                this.$router.push("/login")
            },
            register(){
                if(!/^\w{4,9}$/.test(this.username)) {
                    window.alert("用户名长度为4到9位");
                    return;
                }
                else  if(!/^\w{6,15}$/.test(this.password)){
                    window.alert("密码长度为6到15位");
                    return;
                }
                else if(this.password!==this.re_password){
                    window.alert("两次密码不一致");
                }

                else  if(this.email===''){
                    window.alert("请输入邮箱！")
                    return
                }
                else {
                    this.$axios.post("/user/register",
                        {"username":this.username,
                                "password":this.password,
                                "email": this.email}
                                )
                    window.alert("注册成功")
                    this.$router.push("/login")
                }
            }
        }
    }
</script>

<style scoped>
    .pannel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1502;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .pannel-inner {
        position: absolute;
        background-color: white;
        left: 40%;
        top: 30%;
        width: 20%;
        padding: 0 17px 17px 17px;
        font-size: 18px;
    }
    .pannel-header {
        margin-bottom: 7px;
        text-align: center;
    }
</style>