<template>
    <div class="comment-root">
        <div style="padding: 10px;">
            <span >{{comments}}</span>
            <div v-for='item in commentData' class="comment-info-root">
                <div class="comment-user-info">
                    <div>
                        <img src=../assets/img/user_boy.png class="comment-image">
                        <span  :class="!item.visitorUrl?'anonymous-visitor':'visitor2'" >{{item.commentNick}}</span>
                        <span class="comment-browser-version">{{item.commentUserVer}}</span>
                    </div>
                </div>
                <div class="comment-detail">
                    <span >{{item.commentDetails}}</span>
                </div>
                <div class="comment-date">
                    <span >
                            {{item.commentDate}}
                    </span>
                </div>
            </div>
        </div>
        <div class="Pagination" style="text-align: left;margin-top: 10px;">
            <el-pagination background @size-change="" @current-change="" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="count">
            </el-pagination>
        </div>
        <div class="Visitor">
            <input style="width: 100px" placeholder="昵称" v-model="nickname">
            </input>&nbsp
            <input placeholder="邮箱" v-model="email">
            </input>&nbsp
            <input placeholder="网址(http://) 非必填" v-model="visitorUrl">
            </input>
        </div>
        <div class="Repaly">
            <el-input class="Repalytext" type="textarea" :autosize="{ minRows: minRows, maxRows: maxRows}" placeholder="请输入内容.." v-model="details" style="width: 100%;" maxlength="200" show-word-limit>
            </el-input>
            <el-button  style="margin-top: 10px;float: right" type="primary" size="small"  @click="addComment">发布评论</el-button>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        isShowComment: false,
        artId: { type: String },
    },
    data() {
        return {
            minRows: 5,
            maxRows: 8,
            commentData: [],
            page: 1,
            row: 10,
            count: 0,
            currentPage: 1,
            details: '',
            nickname: '',
            email: '',
            visitorUrl: '',
        }
    },

    computed: {

    },

    mounted() {
    },
    methods:{
        addComment(){

        }
    }

}
</script>
<style lang="scss">
@import "../assets/common/base.scss";
.comment-root{
    padding: 0 30px 50px 30px;
    display: block;
}
.comment-info-root{
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 0;
    display: block;
}
.comment-user{

}
.comment-detail{

}
.comment-date{

}
.Visitor{
    margin-top: 10px;
    float: left;
}
.Repaly{
    margin-top: 50px;
    margin-bottom: 100px;
    text-align: left;
}
.Repalytext{
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
}
</style>
