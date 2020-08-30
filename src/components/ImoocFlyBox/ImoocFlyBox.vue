<template>
  <div class="imooc-fly-box" :ref="refName" id="imooc-fly-box">
    <svg
      :width="width"
      :height="height"
    >
      <defs>
        <path
          :id="pathId"
          :d="path"
          fill="none"
        ></path>
        <radialGradient
          :id="radialGradientId"
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
        <mask :id="maskId">
          <circle
            :r="starLength"
            cx="0"
            cy="0"
            :fill="`url(#${radialGradientId})`"
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
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
      ></use>
      <use
        :href="`#${pathId}`"
        stroke-width="3"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      ></use>
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { computed, ref, onMounted, getCurrentInstance } from 'vue'
import {v4 as uuidv4} from 'uuid'

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
    const uuid= uuidv4()
    const width = ref(0)
    const height = ref(0)
    const refName= 'imoocFlyBox'
    const pathId= `${refName}-${uuid}`
    const radialGradientId= `${refName}-gradient-${uuid}`
    const maskId= `${refName}-mask-${uuid}`
    const dur = computed(() => `${ctx.duration}s`)
    const path = computed(() => `M5 5 L${width.value-5} 5 L${width.value-5} ${height.value-5} L5 ${height.value-5} Z`)

    const init = () => {
      const instance = getCurrentInstance()
      const dom = document.getElementById('imooc-fly-box')
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
      path,
      pathId,
      radialGradientId,
      maskId
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
    padding: 2px;
    box-sizing: border-box;
  }
}
</style>