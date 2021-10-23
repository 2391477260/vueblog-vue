<template>
  <div>
    <el-button type="primary" class="draw-paper-button" @click="">
      <img  class="draw-image" src="../assets/img/icon/edit_white.png" alt="">
      <span class="draw-image-word">写博客</span>
    </el-button>
  </div>

</template>

<script>

export default {
  name:"TopBarProfile",

  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .draw-paper-button{
    width:96px;
    height: 30px;
    background-color: #4a3bff;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    resize: none;
    font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .draw-image{
    margin-top: 1px;
    height: 16px;
    border-style: none;
    padding: 0;
    vertical-align: middle;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .draw-image-word{
    margin-left: 10px;
    font-size: 12px;
  }
</style>
