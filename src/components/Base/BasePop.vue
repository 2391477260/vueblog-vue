<template>
  <div class="rp" @mouseenter="show=true" @mouseleave="show=false">
    <!-- 触发器 -->
    <div>
      <slot name="trigger"></slot>
    </div>

    <!-- pop 气泡窗 -->
    <transition name="fade">
      <div class="page ap no-warp" v-show="show">
        <div class="triangle ap"></div>
        <slot name="pop"></slot>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false // 是否显示气泡弹窗
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 2px 0;
}
.ap {
  left: 50%;
  transform: translate(-50%);
}
.triangle {
  border: 6px solid #fff;
  top: 0;
  transform: translate(-50%, -6px) rotate(45deg);
  box-shadow: -2px -2px 1px 0px #ebebeb;
}
</style>
