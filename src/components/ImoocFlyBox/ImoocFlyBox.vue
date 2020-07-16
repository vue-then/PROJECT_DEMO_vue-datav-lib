<template>
  <div class="imooc-fly-box" :ref="refName">
    <svg
      :width="width"
      :height="height"
    >
      <defs>
        <path
          id="fly-box-path"
          :d="path"
          fill="none"
        ></path>
        <radialGradient
          id="radial-gradient"
          r="50%"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
        >
          <stop
            offset="0%"
            stop-color="#fff"
            stop-opacity="1"
          ></stop>
          <stop
            offset="100%"
            stop-color="#fff"
            stop-opacity="0"
          ></stop>
        </radialGradient>
        <mask id="fly-box-mask">
          <circle
            :r="starLength"
            cx="0"
            cy="0"
            fill="url(#radial-gradient)"
          >
            <animateMotion
              :dur="dur"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        stroke-width="1"
        :stroke="lineColor"
      ></use>
      <use
        href="#fly-box-path"
        stroke-width="3"
        :stroke="starColor"
        mask="url(#fly-box-mask)"
      ></use>
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { computed, ref, onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'ImoocFlyBox',

  props: {
    duration: {
      type: [Number, String],
      default: 3
    },
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: [Number, String],
      default: 50
    },
  },

  setup(ctx) {
    const width = ref(0)
    const height = ref(0)
    const refName= 'imoocFlyBox'
    const dur = computed(() => `${ctx.duration}s`)
    const path = computed(() => `M5 5 L${width.value-5} 5 L${width.value-5} ${height.value-5} L5 ${height.value-5} Z`)

    const init = () => {
      const instance = getCurrentInstance()
      const dom = instance.ctx.$refs[refName]
      width.value = dom.clientWidth
      height.value = dom.clientHeight
    }

    onMounted(() => {
      init()
    })

    return {
      dur,
      width,
      height,
      refName,
      path
    }
  }
}
</script>

<style lang="scss" scoped>
.imooc-fly-box {
  position: relative;
  height: 100%;
  width: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .imooc-fly-box-content {
    height: 100%;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>