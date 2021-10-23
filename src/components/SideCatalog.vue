<template>
    <div class="side-catalog" >
        <div class="art-tag-span" v-for="(item) in tagList" @click.stop="">
            <div >
                <span>{{item.tag}}</span>
                <span>({{item.tagnum}})</span>
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
                tag: 'Docker',
                tagnum:10,
                index:'0'
            },
            {
                tag: 'JAVA',
                tagnum:10,
                index:'1'
            },
            {
                tag: '设计模式',
                tagnum:10,
                index:'2'
            },
            {
                tag: 'Python',
                tagnum:10,
                index:'3'
            },
            {
                tag: 'C++',
                tagnum:10,
                index:'4'
            },
            {
                tag: 'SpringBoot',
                tagnum:10,
                index:'5'
            },
            {
                tag: 'MyBatis',
                tagnum:10,
                index:'6'
            }
        ],
        indexMark: 0,
    }
  }
}
</script>
<style lang="scss" >
    @import '../vueblog-vue/src/assets/common/base';
    .side-catalog {
        width: 20%;
        height: 100%;
        position: fixed;
        z-index: 10;
        right: 10%;
        top: 20%;

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
