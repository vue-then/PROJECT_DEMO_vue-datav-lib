<template>
  <div class="imooc-loading">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- 
        stroke-dasharray= 2 * pie * r/4 = 2*3.1415926*22/4
        stroke-linecap="round"设置两端圆角
        from的第2个第3个参数可以设置以某个坐标点做变换
        可以通过values传递多个值
      -->
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="outsideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <!-- <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform> -->
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          :dur="dur"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          :values="outsideColorAnimation"
          :dur="dur"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <!-- <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 25 25"
          to="0 25 25"
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform> -->
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          :dur="dur"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          :values="insideColorAnimation"
          :dur="dur"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
    <div class="imooc-loading-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {computed} from 'vue'

export default {
  name: 'ImoocLoading',

  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outsideColor: {
      type: String,
      default: '#3be6cb'
    },
    insideColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },

  setup(ctx) {
    const outsideColorAnimation = computed(() => `
      ${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}
    `)

    const insideColorAnimation = computed(() => `
      ${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}
    `)

    const dur = computed(() => `${ctx.duration}s`)

    return {
      outsideColorAnimation,
      insideColorAnimation,
      dur
    }
  }
}
</script>

<style lang="scss" scoped>
.imooc-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>