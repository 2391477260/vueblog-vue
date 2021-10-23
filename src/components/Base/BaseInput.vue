<template>
  <div class="flex flex-items-center baseinput bd bg-gray_1" :class="{'baseinput-focus':focus, round:round!=undefined}">

    <label class="pt4 pb4 pr16 pl16 flex flex-items-center flex-1">
      <slot class="prefix"></slot>
      <input class="h24 f14 black_2 flex-1" :type="type" @focus="focus=true" @blur="focus=false" :placeholder="placeholder"
        @input="emitValue" v-model="baseInputValue">
    </label>

    <div class="fit-height">
      <slot name="suffix"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value', 'round', 'type'],

  data: function () {
    return {
      focus: false,
      baseInputValue: this.value
    }
  },

  watch: {
    focus: function (v) {
      this.$emit('focus', v)
    },
    value: function (v) {
      this.baseInputValue = v
    }
  },

  methods: {
    emitValue: function () {
      this.$emit('input', this.baseInputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.baseinput {
  transition: all 0.2s linear;
  border-radius: 2px;
}
.round {
  border-radius: 100px;
}
.baseinput-focus {
  border-color: #8590a6;
  background-color: #fff;
}

#baseinput::placeholder {
  color: #8590a6;
  font-size: 13px;
  letter-spacing: 1px;
}
</style>
