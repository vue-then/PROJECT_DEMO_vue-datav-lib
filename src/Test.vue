<template>
  <div class="test">
    {{msg}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TestComponent',

  setup() {
    const msg = '测试'

    return {
      msg
    }
  }
}
</script>

<style lang="scss" scoped>
  .test {
    color: red;
  }
</style>