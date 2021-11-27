<template>
         <div class="my-article" >
            <BackGround ref="myBack"></BackGround>
            <TopBar @showDialog="showDialog" :login-button-is-show="!isLogin"></TopBar>
             <el-row>
                 <el-col :span="6">
                     <Sider class="Sider-content"></Sider>
                 </el-col>
                 <el-col :span="12">
                     <div  class="article-content" >
                         <articleItem v-for="item in dataShow "
                                      :bean='item'
                                      v-bind:key='item.index'>
                         </articleItem>
                         <el-pagination class="el-pagination"
                                        @prev-click="prePage"
                                        @next-click="nextPage"
                                        @current-change="currentChange"
                                        background layout="prev, pager, next" :total="articleDates.length"
                                        :page-size="pageSize"
                                        :current-page="currentPage"
                         >
                         </el-pagination>
                     </div>
                 </el-col>
                 <el-col :span="6">
                     <SideCatalog></SideCatalog>
                 </el-col>
             </el-row>
             <el-dialog :visible.sync="dialogFormVisible" title="登录" width="600px" center>
                 <div class="login">
                     <el-row :gutter="10">
                         <el-col :span="4"> 账号：</el-col>
                         <el-col :span="20">
                             <el-input
                                     placeholder="请输入账号"
                                     v-model="user.username">
                             </el-input>
                         </el-col>
                     </el-row>
                     <el-row :gutter="10">
                         <el-col :span="4"> 密码：</el-col>
                         <el-col :span="20">
                             <el-input
                                     type="password"
                                     placeholder="请输入密码"
                                     v-model="user.password">
                             </el-input>
                         </el-col>
                     </el-row>
                     <el-button type="primary" @click="login" class="logins">登录</el-button>
                 </div>
             </el-dialog>
         </div>
</template>

<script>
    import {GetBlogs} from "../api/NetworkApi/api"
    import BackGround from '../components/background'
    import ArticleItem from "../components/articleItem";
    import Sider from "../components/common/Sider";
    import TopBar from "../components/common/TopBar";
    import SideCatalog from "../components/common/SideCatalog";
    export default {
        name: "Blogs",
        components: {BackGround,TopBar,Sider, ArticleItem,SideCatalog},
        data() {
            return {
                //后端姑婆来的数据
                articleDates:[],
                //每个页面的数据
                totalPage:[],
                //一页数据的大小
                pageSize:4,
                //当前页数
                currentPage:1,
                //登录框是否显示
                dialogFormVisible:false,
                //用户资料
                user:{
                    username:'jianwei',
                    password:'123456'
                },
                //是否登录
                isLogin:false
            };
        },
        created() {
            this.getDates();
            this.userIsLogin();
        },
        computed:{
            //计算总共页数
            /**
             * @return {number}
             */
            PageNum(){
              return Math.ceil(this.articleDates.length / this.pageSize)||1
            },
            //计算当前展示的页面数据
            dataShow() {
               return this.totalPage[this.currentPage-1];
            },
        },
        methods:{
            //获取后端数据
            async  getDates(){
                await GetBlogs().then((response) =>{
                    this.articleDates=response.data.articleDates;
                    console.log("赋值为：");
                    console.log(this.articleDates)
                });
                this.calTotalPage();
            },
            // 计算所有页面的数据
             calTotalPage(){
                for (let i = 0; i < this.PageNum; i++) {
                    // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
                    // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10条，即slice(5,10)...
                    this.totalPage[i] = this.articleDates.slice(this.pageSize * i, this.pageSize * (i + 1))
                }
                 this.currentPage=this.currentPage+1;
                 this.currentPage=this.currentPage-1;
                 console.log("分页后数据");
                 console.log(this.totalPage)
            },
            //判断是否登录
            userIsLogin(){
                    if(localStorage.getItem('token')==='123456'){
                        this.isLogin=true;
                    }
            },
            //背景创建气泡
            createLoves(e){
                this.$refs.myBack.createLoves(e);
            },
            //下一页
            nextPage() {
                if (this.currentPage === this.pageNum ) return ;
                this.currentPage=this.currentPage+1;
            },
            // 上一页
            prePage() {
                if (this.currentPage === 1) return ;
                this.currentPage=this.currentPage-1;
            },
            //当前页改变时触发
            currentChange(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
            },
            //topbar子组件点击按钮事件
            showDialog(date){
                console.log(date);
                this.dialogFormVisible=true;
            },
            //登录按钮
            login(){
                if(this.user.username==='jianwei'&&this.user.password==='123456'){
                    console.log("登陆成功");
                    localStorage.setItem('token','123456');
                    this.$store.commit('SET_TOKEN','123456');
                    console.log("已存入vuex,token为："+this.$store.state.token);
                    this.dialogFormVisible=false;
                    this.isLogin=true;
                }else {
                    console.log("账号或密码错误");
                }
            }
        }
    };
</script>
<style scoped lang="scss">
    @import '../vueblog-vue/src/assets/common/base';
    .my-article{
        width: 100%;
    }
    .Sider-content{
        margin-top: 20px;
    }
    .article-content {
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;

        .turn-page {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 10px;
            font-size: 26px;
            font-weight: bold;
            color: $text_blue;
            border: 1px solid $text_yellow;
            text-align: center;
        }

        .turn-page:hover {
            background-color: $text_yellow;
            cursor: pointer;
        }

        .previous-btn {
            float: left;
            margin-left: 20px;
        }

        .next-btn {
            float: right;
            margin-right: 20px;
        }
        .el-pagination{
            margin-top: 50px;
        }
    }
    .login {
        text-align: center;
        background: #fff;
        padding: 30px;
        .el-row {
            margin-top: 10px;
            line-height: 40px;
        }
        .logins {
            width: 60%;
            margin-top: 50px;
        }
    }
</style>
