<template>
  <div class="test">
    {{msg}}--{{count}}--{{doubleCount}}
  </div>
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
  .test {
    color: red;
  }
</style>