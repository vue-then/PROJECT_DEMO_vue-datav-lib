<template>
  <div
    id="imooc-container"
    :ref="refName"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '../../utils/index.js'

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
    const context = getCurrentInstance().ctx
    let dom = null

    const initSize = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          dom = context.$refs[refName]

          // 获取容器宽高
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }


          // 获取屏幕视口宽高
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          console.log("setup -> dom", dom)
          console.log('容器宽高', width.value, height.value)
          console.log('屏幕视口宽高', originalWidth.value, originalHeight.value)
          resolve()
        })
      })
    }

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }

    // 计算宽高压缩比
    const updateScale = () => {
      // 获取页面视口
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      console.log('页面视口宽高', currentWidth, currentHeight)
      // 获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    const onResize = async () => {
      console.log('===');
      await initSize()
      updateScale()
    }

    onMounted(async () => {
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(100, onResize))
    })

    onUnmounted(() => {
      window.removeEventListener('resize', debounce(100, onResize))
    })

    return {
      refName
    }
  }
}
</script>

<style lang="scss" scoped>
#imooc-container {
  background: green;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
  transform-origin: left top;
}
</style>