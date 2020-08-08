<template>
  <div
    class="base-scroll-list"
    :id="id"
  >
    <div
      class="base-scroll-list-header"
      :style="{
      backgroundColor: actualConfig.headerBg,
      height: `${actualConfig.headerHeight}px`
    }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
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
import { onMounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useScreen from '../../hooks/useScreen'
import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'

export default {
  name: 'BaseScrollList',

  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  setup(props) {
    const id = `base-scroll-list-${uuidv4()}`
    const { width, height } = useScreen(id)
    const headerData = ref([])
    const headerStyle = ref({})
    const actualConfig = ref([])
    const defaultConfig = {
      // 标题数据
      headerData: [],
      // 标题样式
      headerStyle: [],
      // 标题背景
      headerBg: 'rgb(90,90,90)',
      // 标题高度
      headerHeight: '35',
      // 标题是否展示序号
      headerIndex: false,
      // 展示的序号内容
      headerIndexContent: '#',
      // 序号内容的样式
      headerIndexStyle: {}
    }

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)

      if (_headerData.length === 0) {
        return
      }

      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
      }

      headerData.value = _headerData
      headerStyle.value = _headerStyle
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      handleHeader(_actualConfig)
      actualConfig.value = _actualConfig
    })

    return {
      id,
      headerData,
      headerStyle,
      actualConfig
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