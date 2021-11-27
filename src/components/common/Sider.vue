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
                    :src=this.musicDate.musicAddress>
            </iframe>
            <br>
            <div class="musicList">
                <el-table
                        ref="singleTable"
                        :row-key="(row)=>{ return row.id}"
                        size="mini"
                        :data="calMusicDates[this.currentPage-1]"
                        style="width: 100%"
                        :reserve-selection="true"
                        highlight-current-row
                        @current-change="handleCurrentChange">
                    <el-table-column
                            type="index"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="musicName"
                            label="歌曲"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="author"
                            label="作者"
                            width="150">
                    </el-table-column>
                </el-table>
                <el-pagination class="el-pagination"
                               @prev-click="prePage"
                               @next-click="nextPage"
                               @current-change="currentChange"
                               background layout="prev, pager, next" :total="musicDates.length"
                               :page-size="pageSize"
                               :current-page="currentPage"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sider",
        data() {
            return{
                //页数
                pageSize:4,
                //当前页
                currentPage:1,
                //分页后的歌曲信息
                calMusicDates:[],
                //所有歌曲信息
                musicDates:[
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=31445554&auto=1&height=66",
                        musicName:'七月上',
                        author:"Jam",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=155887&auto=1&height=66",
                        musicName:'当我想你的时候',
                        author:"汪峰",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=0&id=7063790037&auto=1&height=66",
                        musicName:'Legends Never Die',
                        author:"Against the Current",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=1430583016&auto=1&height=66",
                        musicName:'海底',
                        author:"一只榴莲",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=486855953&auto=1&height=66",
                        musicName:'马马嘟嘟骑',
                        author:"斯斯与帆",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=27731339&auto=1&height=66",
                        musicName:'偏爱',
                        author:"张芸京",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=1359382613&auto=1&height=66",
                        musicName:'我愿',
                        author:"阿虾",
                    },
                    {
                        musicAddress:"//music.163.com/outchain/player?type=2&id=66282&auto=1&height=66",
                        musicName:'浮夸',
                        author:"陈奕迅",
                    },
                ],
                //当前播放歌曲信息
                musicDate:{},
            }
        },
        computed:{
            PageNum(){
                return Math.ceil(this.musicDates.length / this.pageSize)||1
            },
        },
        methods: {
            //数据分页
            JScalMusicDates(){
                for (let i = 0; i < this.PageNum; i++) {
                    // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
                    // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10条，即slice(5,10)...
                    this.calMusicDates[i] = this.musicDates.slice(this.pageSize * i, this.pageSize * (i + 1))
                }
                this.currentPage=this.currentPage+1;
                this.currentPage=this.currentPage-1;
                console.log("分页后数据");
                console.log(this.calMusicDates)
            },
            //歌曲下一页
            nextPage() {
                if (this.currentPage === this.pageNum ) return ;
                this.currentPage=this.currentPage+1;
            },
            // 歌曲上一页
            prePage() {
                if (this.currentPage === 1) return ;
                this.currentPage=this.currentPage-1;
            },
            //当前页改变时触发
            currentChange(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
            },
            //点击哪一行选中
            handleCurrentChange(currentRow){
                console.log("选中行数据");
                console.log(currentRow);
                this.musicDate=currentRow;
            },
            //设置选中第几行
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
        },
        mounted() {
            this.JScalMusicDates();
            this.setCurrent(this.musicDates[0]);
        }
    }
</script>

<style scoped>
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
    .musicList{
        margin-left: 70px;
    }
    .el-pagination{
        margin-right: 60px;
    }
</style>
