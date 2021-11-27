<template>
    <div class="comments">
        <div class="comment-send">
            <div class="textarea-container">
                <textarea cols="80" name="msg" rows="5" placeholder="发一条友善的评论" class="ipt-txt"></textarea>
                <button type="submit" class="comment-submit">发表评论</button>
            </div>
        </div>
        <div class="comment-list">
            <div class="item-comment" v-for="item in commentsDate">
                <div class="user-face">
                        <img class="user-face-img" src="../assets/img/user_boy.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            commentsDate:[],
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
.comments{
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-size: 0;
    zoom: 1;
    min-height: 100px;
    background: #fff;
}
.comment-send{
    margin: 10px 0;
}
.textarea-container{
    width: 100%;
    height: 65px;
}
.ipt-txt{
        font-size: 12px;
        display: inline-block;
        box-sizing: border-box;
        background-color: #f4f5f7;
        border: 1px solid #e5e9ef;
        overflow: auto;
        border-radius: 4px;
        color: #555;
        width: 100%;
        height: 65px;
        transition: 0s;
        padding: 5px 10px;
        line-height: normal;
        outline: none;
        resize:none
 }
 .comment-submit{
        width: 70px;
        height: 64px;
        position: absolute;
        padding: 4px 15px;
        font-size: 14px;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        min-width: 60px;
        vertical-align: top;
        cursor: pointer;
        background-color: #00a1d6;
        border: 1px solid #00a1d6;
        transition: 0.1s;
        user-select: none;
        outline: none;
 }
</style>
