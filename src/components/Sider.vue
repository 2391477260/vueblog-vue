<template>
    <div class="sider-panel">
        <div class="block">
            <el-avatar  :size="300" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F04%2F20180504014806_dkwev.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637322037&t=bd637719d0ddf38162452a62e9fed8a1"></el-avatar>
            <br/>
            <span class="user-name">简JianWei</span>
            <br/>
            <span class="user-sign">高堂明镜悲白发，朝如青丝暮成雪...</span>
            <iframe allow="autoplay" frameborder="no" border="0" marginwidth="0" marginheight="0"  width=330
                    height=86
                    :src=this.musicList[this.musicListNum]>
            </iframe>
            <br>
            <el-button  icon="el-icon-caret-left" circle @click="submusicListNum">上一首</el-button>
            <el-button  icon="el-icon-caret-right" circle @click="addmusicListNum">下一首</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sider",
        data() {
            return{
                musicList:[
                    "//music.163.com/outchain/player?type=2&id=1430583016&auto=1&height=66",
                    "//music.163.com/outchain/player?type=2&id=486855953&auto=1&height=66",
                    "//music.163.com/outchain/player?type=2&id=27731339&auto=1&height=66",
                    "//music.163.com/outchain/player?type=2&id=1359382613&auto=1&height=66",
                    "//music.163.com/outchain/player?type=2&id=66282&auto=1&height=66"
                ],
                musicListNum:0,
            }
        },
        methods: {
            addmusicListNum(){
                if(this.musicListNum<this.musicList.length-1){
                    this.musicListNum++;
                }
                console.log(this.musicListNum);
            },
            submusicListNum(){
                if(this.musicListNum>=1){
                    this.musicListNum--;
                }
                console.log(this.musicListNum);
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    .sider-panel{
        margin-top: 10%;
        float: left;
        width: 25%;
        height: 100%;
    }
    .user-name {
        font-family: 'STXingkai', serif;
        font-size: 48px;
        font-weight: bold;
        text-align: left;
    }
    .user-sign {
        max-width: 100%;
        font-family: 'Microsoft JhengHei', serif;
        font-size: 18px;
        text-align: left;
        font-style: italic;
        word-break: normal;
        padding-left: 10px;
    }
</style>
