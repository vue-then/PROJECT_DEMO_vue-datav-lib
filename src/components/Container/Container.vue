<template>
  <div
    id="imooc-container"
    :ref="refName"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, getCurrentInstance, onMounted } from 'vue'

export default {
  name: 'ImoocContainer',

  props: {
    options: Object
  },

  setup(ctx) {
    const refName = 'imoocContainer'
    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)

    onMounted(() => {
      const context = getCurrentInstance().ctx
      const dom = context.$refs[refName]
      console.log("setup -> dom", dom)

      // 获取容器宽高
      if (ctx.options && ctx.options.width && ctx.options.height) {
        width.value = ctx.options.width
        height.value = ctx.options.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }
      console.log('容器宽高', width.value, height.value)

      // 获取视口宽高
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width
        originalHeight.value = window.screen.height
      }

      console.log('视口宽高', originalWidth.value, originalHeight.value)
    })

    return {
      refName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>