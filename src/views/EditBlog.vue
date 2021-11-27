<template>

        <div class="box">
            <Editor ref="editor"></Editor>
            <div class="handleButton">
                <a class="handleButtonValue" @click="HandleEditBlog">
                    提交博客
                </a>
            </div>
            <el-dialog
                    :visible.sync="dialogFormVisible"
                    title="请填写博客信息"
                    width="30%"
                    :append-to-body="true"
            >
                <el-input
                        v-model="article.title"
                        :rows="1"
                        type="textarea"
                        placeholder="输入博客标题"
                />
                <br>
                <br>
                <el-input
                        v-model="article.abstract"
                        :rows="2"
                        type="textarea"
                        placeholder="输入博客摘要"
                />
                <div>
                    <br>
                    <el-radio-group v-model="radio">
                        <el-radio :label="3">学习</el-radio>
                        <el-radio :label="6">娱乐</el-radio>
                        <el-radio :label="9">生活</el-radio>
                    </el-radio-group>
                </div>
                <template #footer>
                  <span class="dialog-footer">
                      <el-button type="primary" @click="HandleBlog">提交
                      </el-button>
                      <el-button @click="dialogFormVisible = false">返回</el-button>
                  </span>
                </template>
            </el-dialog>
        </div>
</template>
<script>
    import showdown from "showdown";
    import utils from "../api/Utils/util"
    import Editor from '../components/editor'

    export default {
        name: "EditBlog",
        components: {Editor},
        data(){
            return{
                article:{
                    title:'',
                    typeName:'',
                    abstract:'',
                    textArea:'',
                    textAreaHtml:'',
                    postTime:'',
                    artCommentCount:''
                },
                dialogFormVisible:false,
                radio:'',
            }
        },
        methods:{
            HandleEditBlog(){
                console.log("提交博客，弹出摘要书写框");
                this.article.textArea=this.$refs.editor.editBlogContent;
                console.log(this.article.textArea);
                this.dialogFormVisible=true;
            },
            HandleBlog(){
                this.article.postTime=utils.getCurrentTime();
                if(this.radio===3){
                    this.article.typeName='学习';
                }else if(this.radio===6){
                    this.article.typeName='娱乐';
                }else if(this.radio===9){
                    this.article.typeName='生活';
                }
                let converter = new showdown.Converter();
                this.article.textAreaHtml=converter.makeHtml(this.article.textArea);
                console.log("提交的博客为：");
                console.log(this.article);
                this.dialogFormVisible=false;
                /*  document.getElementById('id').innerHTML = converter.makeHtml(this.article.textArea);
                console.log(this.article);*/
            }
        }
    }

</script>
<style scoped lang="scss">
    @import '../vueblog-vue/src/assets/common/base';
    .box{
        margin: auto;
        height: 90%;
        width: 80%;
    }
    .handleButton{
        margin-top: 8px;
        height: 25px;
        width: 70px;
        border-radius: 15px;
        background-color: #4ab3f4;
        position: relative;
    }
    .handleButtonValue{
        color: #f6f6f6;
        font-size: 10px;
        padding-top: 4px;
        cursor: pointer;
    }
    .handleButtonValue:hover{
        color: black;
    }
</style>

