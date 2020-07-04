<template>
  <!-- 如果不写viewBox，则默认viewBox的宽高和viewport一致 -->
  <!-- 默认preserveAspectRatio="xMidYMid meet" meet选取最小缩放比等比缩放, slice选取最大缩放比等比缩放 -->
  <svg
    width="0"
    height="0"
  >
    <defs>
      <!-- 用symbol代替g标签，可以给个独立的viewbox属性 -->
      <!-- 表示'更多'的图标 -->
      <symbol
        id="more"
        viewBox="0 0 100 100"
      >
        <circle
          r="5"
          cx="20"
          cy="25"
          fill="currentColor"
        ></circle>
        <circle
          r="5"
          cx="20"
          cy="50"
          fill="currentColor"
        ></circle>
        <circle
          r="5"
          cx="20"
          cy="75"
          fill="currentColor"
        ></circle>
        <line
          x1="40"
          y1="25"
          x2="100"
          y2="25"
          stroke-width="8"
          stroke="currentColor"
        ></line>
        <line
          x1="40"
          y1="50"
          x2="100"
          y2="50"
          stroke-width="8"
          stroke="currentColor"
        ></line>
        <line
          x1="40"
          y1="75"
          x2="100"
          y2="75"
          stroke-width="8"
          stroke="currentColor"
        ></line>
      </symbol>
      <!-- 箭头 -->
      <symbol
        id="filledArrowRight"
        viewBox="0 0 100 100"
      >
        <polyline
          points="20 10, 80 50, 20 90"
          fill="currentColor"
        ></polyline>
      </symbol>
      <symbol
        id="arrowRight"
        viewBox="0 0 100 100"
      >
        <polyline
          points="30 20, 70 50, 30 80"
          fill="transparent"
          stroke="currentColor"
          stroke-width="4"
        ></polyline>
      </symbol>
    </defs>
  </svg>
</template>

<script type="text/ecmascript-6">
import { computed, ref } from 'vue'

export default {
  name: 'TestComponent',

  setup() {
    const msg = '测试'
    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    return {
      msg,
      count,
      doubleCount
    }
  }
}
</script>

<style lang="scss" scoped>
</style>