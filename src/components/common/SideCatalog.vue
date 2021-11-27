<template>
    <div class="side-catalog" >
        <div class="art-tag-span" v-for="(item) in tagList" @click.stop="">
            <div >
                <span>{{item.tag}}</span>
                <span>({{item.tagNum}})</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "SideCatalog",
  data() {
    return {
        tagList: [
            {
                tag: '生活',
                tagNum:10,
                index:'0'
            },
            {
                tag: '娱乐',
                tagNum:10,
                index:'1'
            },
            {
                tag: '学习',
                tagNum:10,
                index:'2'
            }
        ],
        indexMark: 0,
    }
  }
}
</script>
<style lang="scss" >
    @import 'src/assets/common/base';
    .side-catalog {
        margin-top: 10%;
        margin-left: 5%;
        width: 20%;
        height: 10%;
        position: fixed;
        z-index: 10;
        .art-tag-span {
            float: left;
            text-align: left;
            display: inline-block
        }
        div {
            display: block;
            div {
                padding-left: 6px;
                padding-right: 6px;
                padding-top: 2px;
                padding-bottom: 2px;
                margin-left: 8px;
                margin-top: 8px;
                border: 0.5px solid $text_yellow;
                border-radius: 2px;
                cursor: pointer;
                position: relative;
            }

            div::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                transition: .3s;
                opacity: .3;
                background: $text_yellow;
                transform-origin: left;
                transform: scaleX(0);
            }

            div:hover::after {
                transform: scaleX(1);
            }

        }

        .active {
            background-color: $text_yellow;
        }

        .unactive {
            background-color: white;
        }

        span {
            font-size: 14px;
            font-style: italic;
        }

        span:nth-child(1) {
            color: #666;
        }

        span:nth-child(2) {
            color: $text_blue;
        }
    }

</style>
