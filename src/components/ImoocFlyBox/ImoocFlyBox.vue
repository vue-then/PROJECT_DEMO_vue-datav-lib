<template>
  <div class="imooc-fly-box">
    <svg
      :width="width"
      :height="height"
    >
      <defs>
        <path
          id="fly-box-path"
          d="M5 5 L395 5 L395 395 L5 395 Z"
          fill="none"
        ></path>
        <mask id="fly-box-mask">
          <circle
            r="150"
            cx="50"
            cy="50"
            fill="white"
          >
            <animateMotion
              :dur="dur"
              path="M5 5 L395 5 L395 395 L5 395 Z"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        stroke-width="1"
        stroke="#235fa7"
      ></use>
      <use
        href="#fly-box-path"
        stroke-width="3"
        stroke="#4fd2dd"
        mask="url(#fly-box-mask)"
      ></use>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
import { computed } from 'vue'

export default {
  name: 'ImoocFlyBox',

  props: {
    width: {
      type: [Number, String],
      default: 400
    },
    height: {
      type: [Number, String],
      default: 400
    },
    duration: {
      type: [Number, String],
      default: 3
    }
  },

  setup(ctx) {
    const dur = computed(() => `${ctx.duration}s`)

    return {
      dur
    }
  }
}
</script>

<style lang="scss" scoped>
</style>