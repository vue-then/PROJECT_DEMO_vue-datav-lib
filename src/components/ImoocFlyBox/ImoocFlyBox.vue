<template>
  <div class="imooc-fly-box">
    <svg :width="width" :height="height">
      <path d="M5 5 L395 5 L395 395 L5 395 Z" stroke-width="1" stroke="#235fa7" fill="none"></path>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
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
  },

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