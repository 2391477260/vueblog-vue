<template>
    <div>
        <TopBar></TopBar>
        <div class="BlogDetail">
            <div class="BlogDetail-Box">
                <span class="BlogDetail-Box-Title">{{articleDates[0].title}}</span>
                <div class="BlogDetail-Box-Info">
                    <span class="BlogDetail-Box-Info-span">{{articleDates[0].typeName}}</span>
                    <img src="../assets/img/date_ic.png" alt=""/>
                    <span>{{articleDates[0].postTime}}</span>
                </div>
                <div class="BlogDetail-Box-Content" v-html="articleDates[0].textAreaHtml"></div>
            </div>
        </div>
        <comments :isShowComment="true" class="details-comment"></comments>
    </div>
</template>
<script>
    import {GetBlogByArtId} from "../api/NetworkApi/api"
    import comments from "../components/comments";
    import TopBar from "../components/common/TopBar";
    export default {
        name:"BlogDetail",
        components:{
            TopBar,comments
        },
        data(){
            return{
                artId: this.$route.params.artId,
                articleDates:[{}],
            }
        },
        created() {
            this.getBlogByartId()
        },
        methods:{
            getBlogByartId(){
                GetBlogByArtId({artId: this.artId}).then((response)=>{
                    console.log("response为");
                    console.log(response);
                    this.articleDates=response.data.articleDates;
                    console.log("articleDates为");
                    console.log(this.articleDates);
                })
            }
        }
    }
</script>
<style  lang='scss'>
    .BlogDetail{
        margin-top: 10px;
        width: 65%;
        height: 100%;
        background-color: #fff;
        margin-left: 17.5%;
        display: block;
    }
    .BlogDetail-Box{
        padding: 10px;
        background-color: #fff;
        display: block;
    }
    .BlogDetail-Box-Title{
        width: 100%;
        text-align: left;
        padding: 20px 0;
        display: block;
        font-size: 28px;
        font-weight: 600;
        margin-left: 20px;
    }
    .BlogDetail-Box-Info{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        text-align: left;
        margin-left: 20px;
        font-size: 13px;
    }
    .BlogDetail-Box-Info-span{
        margin-right: 10px;
        color: #ffd04b;
        cursor: default;
    }
    .BlogDetail-Box-Content{
        height: 100%;
        margin-top: 20px;
        text-align: left;
        padding: 0 20px 20px 20px;
        border-bottom: 1px solid #f0f0f0;
        line-height: 30px;
        color: #333;
        display: block;
    }
    .details-comment{
        margin-left: 18%;
        width: 60%;
    }
</style>
