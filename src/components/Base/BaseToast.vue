<template>
  <transition name="move">
    <div class="base-toast page center" v-show="show">
      <img class="w20 h20" src="@/assets/img/icon/succeed.png" alt="">
      <div class="error black_3 ml10">{{info.content}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return { show: false, timer: null }
  },

  computed: {
    info: function () {
      const info = this.$store.state.toastInfo
      info.content && (this.show = true)
      return info
    }
  },

  watch: {
    show: function (v) {
      if (!v) return
      this.timer = setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-toast {
  z-index: 1000;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  top: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgb(177, 177, 177);
}
.page {
  letter-spacing: 1.5px;
  padding: 7px 16px;
  margin: 0;
}

.move-enter-active,
.move-leave-active {
  transition: top 0.5s ease-in-out;
}
.move-enter,
.move-leave-to {
  top: -50px;
}
</style>
