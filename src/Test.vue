<template>
  <!-- 如果不写viewBox，则默认viewBox的宽高和viewport一致 -->
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
  >
    <line
      x1="0"
      y1="50"
      x2="100"
      y2="50"
      stroke-width="8"
      stroke="currentColor"
    ></line>
    <line
      x1="50"
      y1="0"
      x2="50"
      y2="100"
      stroke-width="8"
      stroke="currentColor"
    ></line>
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