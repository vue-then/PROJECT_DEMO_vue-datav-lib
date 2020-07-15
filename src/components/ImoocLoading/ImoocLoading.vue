<template>
  <div class="imooc-loading">
    <svg width="200" height="200" viewBox="0 0 50 50">
      <!-- 
        stroke-dasharray= 2 * pie * r/4 = 2*3.1415926*22/4
        stroke-linecap="round"设置两端圆角
      -->
      <circle cx="25" cy="25" r="22" fill="none" stroke-width="3" stroke="#3be6cb" stroke-dasharray="34" stroke-linecap="round"></circle>
      <circle cx="25" cy="25" r="12" fill="none" stroke-width="3" stroke="#02bcfe" stroke-dasharray="19" stroke-linecap="round"></circle>
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