<template>
  <div
    id="imooc-container"
    :ref="refName"
  >
    <template v-if="ready">
      <slot></slot>
    </template>
    <!-- <button @click="changeStyle" :style="{'font-size':'100px'}">change</button> -->
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
    const ready = ref(false)
    let dom = null
    let observer = null

    // const style = ref({})
    // const changeStyle = () => {
    //   style.value = {
    //     ...style.value,
    //     height: '1000px'
    //   }
    // }

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

    // 阻止缩放
    const onResize = async (e) => {
      await initSize()
      updateScale()
    }

    // 监听样式改变
    const initMutationObserver = () => {
      observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true, // 是否监听属性
        attributeFilter: ['style'], // 需要监听的属性
        attributeOldValue: true // 会往回调函数传入一个对象
      })
    }

    const removeMutationObserver = () => {
      if(observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    onMounted(async () => {
      ready.value = false
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(100, onResize))
      initMutationObserver()
      ready.value = true
    })

    onUnmounted(() => {
      window.removeEventListener('resize', debounce(100, onResize))
      removeMutationObserver()
    })

    return {
      refName,
      ready,
      // style,
      // changeStyle
    }
  }
}
</script>

<style lang="scss" scoped>
#imooc-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
  transform-origin: left top;
}
</style>