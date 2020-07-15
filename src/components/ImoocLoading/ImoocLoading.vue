<template>
  <div class="imooc-loading">
    <svg
      width="200"
      height="200"
      viewBox="0 0 50 50"
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
        stroke="#3be6cb"
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
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcfe;#3be6cb"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        stroke="#02bcfe"
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
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ImoocLoading',

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>