<template>
    <div class="MyIndex" >
        <BackGround ref="MyBack"></BackGround>
        <div class="musicPlayer">
            <iframe allow="autoplay" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330
                     height=86
                     :src=this.musicList[this.musicListNum]>
            </iframe>
            <br>
            <el-button  icon="el-icon-caret-left" circle @click="submusicListNum">上一首</el-button>
            <el-button  icon="el-icon-caret-right" circle @click="addmusicListNum">下一首</el-button>
        </div>
       <div class="banner">
           <div class="item">
                <img :src="dataList[currentIndex]">
            </div>
            <div class="page" v-if="this.dataList.length > 1">
                <ul>
                    <li @click="gotoPage(prevIndex)">&lt;</li>
                    <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
                    <li @click="gotoPage(nextIndex)">&gt;</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div>
                <span class="logo-span">JianWei的主页</span>
            </div>
            <div class="splash-tv-root">
                <span class="splash-tv blog" @click="RedirectToGithub">github</span>
                <span class="dividle">|</span>
                <span class="splash-tv blog" @click="RedirectToBlog">博客</span>
            </div>
        </div>
    </div>
</template>

<script>
    import BackGround from '../components/background'
    export default {
        name: "Index.vue",
        components: {BackGround},
        data() {
            return {
                dataList:["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F16%2F3d%2F0b%2F163d0b503edae8946d9ad58aa4108cef.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637308119&t=b75bc7dfb491fbb4143581ce03b0eb17",
                          "http://www.xandone.pub/mainimage.jpg",
                          "https://pic.rmb.bdstatic.com/bab56844014cac0a65a3bf45f12ff9a4.jpeg"
                         ],//index背景图
                musicList:[
                            "//music.163.com/outchain/player?type=2&id=1430583016&auto=1&height=66",
                           "//music.163.com/outchain/player?type=2&id=27731339&auto=1&height=66",
                           "//music.163.com/outchain/player?type=2&id=1359382613&auto=1&height=66",
                            "//music.163.com/outchain/player?type=2&id=66282&auto=1&height=66",
                            "//music.163.com/outchain/player?type=2&id=486855953&auto=1&height=66",
                          ],
                musicListNum:0,
                currentIndex: 0,   //默认显示图片
                timer: null    //定时器
            }
        },
        created() {
            this.runInv;
            this.RemoveScroll();
        },
        methods:{
            //生成气泡
            createLoves(e){
                this.$refs.MyBack.createLoves(e);
            },
            //前往github
            RedirectToGithub(){
                window.open("https://github.com/2391477260");
            },
            //前往博客页面
            RedirectToBlog(){
                this.$router.push('/blogs');
            },
            //去指定的轮播图
            gotoPage(index) {
                this.currentIndex = index;
            },
            //后一首歌曲
            addmusicListNum(){
                if(this.musicListNum<this.musicList.length-1){
                    this.musicListNum++;
                }
                console.log(this.musicListNum);
            },
            //前一首歌曲
            submusicListNum(){
                if(this.musicListNum>=1){
                    this.musicListNum--;
                }
                console.log(this.musicListNum);
            },
            //禁用滑动条
            RemoveScroll () {

                document.body.style.overflow = "hidden";

            }
        },
        computed: {
            //上一张
            prevIndex() {
                if(this.currentIndex == 0) {
                    return this.dataList.length - 1;
                }else{
                    return this.currentIndex - 1;
                }
            },
            //下一张
            nextIndex() {
                if(this.currentIndex == this.dataList.length - 1) {
                    return 0;
                }else {
                    return this.currentIndex + 1;
                }
            },
            //定时器
            runInv() {
                this.timer = setInterval(() => {
                    this.gotoPage(this.nextIndex)
                }, 3000)
            }
        }
    }
</script>

<style  lang='scss'>
    @import '../vueblog-vue/src/assets/common/base';
    * {
        margin: 0;
        padding:0;
    }
    .MyIndex {
        margin: 0;
        padding:0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    ul li {
        list-style: none;
        float: left;
        width: 30px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color: rgba(255,255,255,.8);
        font-size: 14px;
    }
    .banner {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        z-index:1;
    }
    .banner .item{
        width: 100%;
        height: 100%;
    }
    .banner img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .banner .page {
        background: rgba(0,0,0,.5);
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
    }
    .banner .page ul {
        float: right;
    }
    .current {
        color: #ff6700;
    }
    .musicPlayer{
        z-index:2;
        position: absolute;
        top: 78%;
        left:3%;
    }
    .content {
        z-index:2;
        position: absolute;
        top: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-span {
        font-size: 5vw;
        color: white;
        font-family: '宋体';
    }

    .splash-tv-root {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .splash-tv {
        position: relative;
        font-size: 32px;
        color: $text_yellow;
    // font-family: '仿宋'
    }

    .splash-tv::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -8px;
        height: 3px;
        transition: .3s;
        opacity: .6;
        background: $text_yellow;
        transform-origin: center;
        transform: scaleX(0);
    }

    .splash-tv:hover::after {
        transform: scaleX(1);
    }

    .dividle {
        margin: 0 30px;
        color: $text_yellow;
        font-size: 22px;
    }

    .blog {
        cursor: pointer;
    }

    a {
        position: relative;
        display: inline-block;
    }

</style>
