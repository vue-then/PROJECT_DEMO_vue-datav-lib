<template>
  <div class="container">
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10, 0) rotate(30)"></rect>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SvgAnimation',

  props: {
  },

  setup(ctx) {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 200px;
  border: 1px solid #000;
}
</style>