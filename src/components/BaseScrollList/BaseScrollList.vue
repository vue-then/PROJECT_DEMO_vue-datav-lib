<template>
  <div class="base-scroll-list">
    <div
      class="base-scroll-list-header"
      :style="{
      backgroundColor: headerBg,
      height: `${headerHeight}px`
    }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in header"
        :key="`${headerItem}${i}`"
        :style="headerStyle[i]"
        v-html="headerItem"
      >

      </div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'BaseScrollList',

  props: {
    // 标题数据
    header: Array,
    // 标题样式
    headerStyle: Array,
    // 标题背景
    headerBg: {
      type: String,
      default: 'rgb(90,90,90)'
    },
    // 标题高度
    headerHeight: {
      type: [String, Number],
      default: '35'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-scroll-list {
  .base-scroll-list-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
    .header-item {
      width: 150px;
    }
  }
}
</style>