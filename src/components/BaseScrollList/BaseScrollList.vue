<template>
  <div
    class="base-scroll-list"
    :id="id"
  >
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
import { onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useScreen from '../../hooks/useScreen'
import cloneDeep from 'lodash/cloneDeep'

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
    },
    // 标题是否展示序号
    headerIndex: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const id = `base-scroll-list-${uuidv4()}`
    const { width, height } = useScreen(id)

    const handleHeader = () => {
      const headerData = cloneDeep(props.header)
      console.log("handleHeader -> headerData", headerData)

      if(props.header.length === 0) {
        return
      }

      if(props.headerIndex) {

      }
    }

    onMounted(() => {
      console.log(props.headerIndex, width, height);
      handleHeader()
    })

    return {
      id
    }
  }
}
</script>

<style lang="scss" scoped>
.base-scroll-list {
  height: 100%;
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