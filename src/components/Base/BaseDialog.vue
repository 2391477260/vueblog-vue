<template>
  <transition name="fade">
    <div class="dialog fit-height fit-width center unselect" v-show="show">

      <transition name="scale">
        <div class="page minw325" v-show="show">

          <div>
            <div class="black_1 f16 flex flex-items-center">
              <img class="w22 ml20 mr10" src="@/assets/img/icon/warn.png" alt="">
              <span>{{dialogInfo.title}}</span>
            </div>
            <div class="black_3 mt5 mr100 ml52">{{dialogInfo.content}}</div>
          </div>

          <div class="flex mt24 flex-end">
            <base-button @click="cancel" v-show="dialogInfo.cancel">取 消</base-button>
            <base-button class="ml10" primary @click="confirm" v-show="dialogInfo.confirm">确 认</base-button>
          </div>

        </div>
      </transition>

    </div>
  </transition>
</template>

<script>
export default {
  data: function () {
    return {
      show: false
    }
  },

  methods: {
    // 取消
    cancel: function () {
      this.dialogInfo.cancel(this.close)
    },

    // 确认
    confirm: function () {
      this.dialogInfo.confirm(this.close)
    },

    // 关闭弹窗
    close: function () {
      this.show = false
    },

    // 开启弹窗
    open: function () {
      this.show = true
    }
  },

  computed: {
    dialogInfo: function () {
      const info = this.$store.state.dialogInfo
      info.content && this.open()
      return info
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.45);
}
.minw325 {
  min-width: 325px;
}
.page {
  padding: 32px 32px 24px;
}
</style>
