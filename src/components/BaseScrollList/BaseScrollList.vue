<template>
  <div
    class="base-scroll-list"
    :id="id"
  >
    <div
      class="base-scroll-list-header"
      :style="{
      backgroundColor: actualConfig.headerBg,
      height: `${actualConfig.headerHeight}px`,
      fontSize: `${actualConfig.headerFontSize}px`,
      color: actualConfig.headerColor
    }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="`${headerItem}${i}`"
        :style="{width: `${columnWidths[i]}px`,...headerStyle[i]}"
        v-html="headerItem"
        :align="aligns[i]"
      >

      </div>
    </div>
    <div
      class="base-scroll-list-rows-wrapper"
      :style="{
        height: `${height-actualConfig.headerHeight}px`
      }"
    >
      <div
        class="base-scroll-list-rows"
        v-for="(rowData, index) in currentRowsData"
        :key="rowData.rowIndex"
        :style="{
          height: `${rowHeights[index]}px`,
          lineHeight: `${rowHeights[index]}px`,
          backgroundColor: rowData.rowIndex % 2 === 0 ? rowBg[1]: rowBg[0],
          fontSize: `${actualConfig.rowFontSize}px`,
          color: actualConfig.rowColor
        }"
      >
        <div
          class="base-scroll-list-columns base-scroll-list-text"
          v-for="(colData, colIndex) in rowData.data"
          :key="`${colData}${colIndex}`"
          v-html="colData"
          :style="{
            width: `${columnWidths[colIndex]}px`,
            ...rowStyle[colIndex]
          }"
          :align="aligns[colIndex]"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { watch, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useScreen from '../../hooks/useScreen'
import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'

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
  headerIndexStyle: {
    width: '50px'
  },
  // 序号列数据内容
  headerIndexData: [],
  // 数据项,二维数组
  data: [],
  // 每页显示的数据条数
  rowNum: 10,
  // 行样式
  rowStyle: [],
  // 行序号内容的样式
  rowIndexStyle: {
    width: '50px'
  },
  // 行背景
  rowBg: [],
  // 内容居中方式
  aligns: [],
  headerFontSize: 28,
  rowFontSize: 28,
  headerColor: '#fff',
  rowColor: '#000',
  moveNum: 1, // 每次移动几条数据的位置
  duration: 2000 // 动画间隔
}

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
    const headerStyle = ref([])
    const rowStyle = ref([])
    const rowBg = ref([])
    const actualConfig = ref([])
    const columnWidths = ref([])
    const rowHeights = ref([])
    const rowsData = ref([])
    const currentRowsData = ref([])
    const currentIndex = ref(0) // 动画指针
    const rowNum = ref(defaultConfig.rowNum)
    const aligns = ref([])
    const isAnimationStart = ref(true)

    let avgHeight
    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      const _rowStyle = cloneDeep(config.rowStyle)
      const _rowsData = cloneDeep(config.data)
      const _aligns = cloneDeep(config.aligns)

      if (_headerData.length === 0) {
        return
      }

      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
        _rowStyle.unshift(config.rowIndexStyle)
        _rowsData.forEach((rows, index) => {
          // 处理序号列数据
          if (config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
            rows.unshift(config.headerIndexData[index])
          } else {
            rows.unshift(index + 1)
          }
        })
        _aligns.unshift('center')
      }

      // 动态计算header中每一列的宽度
      let usedWidth = 0
      let usedColumnNum = 0
      // 判断是否存在自定义width
      _headerStyle.forEach(style => {
        if (style.width) {
          usedWidth += Number(style.width.replace('px', ''))
          usedColumnNum++
        }
      })
      // 动态计算列宽时，使用剩余未定义的宽度除以剩余的列数
      const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum)
      const _columnWidths = new Array(_headerData.length).fill(avgWidth)
      _headerStyle.forEach((style, index) => {
        if (style.width) {
          const headerWidth = Number(style.width.replace('px', ''))
          _columnWidths[index] = headerWidth
        }
      })

      columnWidths.value = _columnWidths
      headerData.value = _headerData
      headerStyle.value = _headerStyle
      rowStyle.value = _rowStyle
      aligns.value = _aligns
      const { rowNum } = config
      if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
        const newRowData = [..._rowsData, ..._rowsData]
        rowsData.value = newRowData.map((item, index) => ({
          data: item,
          rowIndex: index
        }))
      } else {
        rowsData.value = _rowsData.map((item, index) => ({
          data: item,
          rowIndex: index
        }))
      }

    }

    const handleRows = (config) => {
      // 动态计算每行数据的高度
      const { headerHeight } = config
      const unusedHeight = height.value - headerHeight
      rowNum.value = config.rowNum

      // 如果rowNum大于实际数据长度，则以实际数据长度为准
      if (rowNum.value > rowsData.value.length) {
        rowNum.value = rowsData.value.length
      }
      avgHeight = unusedHeight / rowNum.value
      rowHeights.value = new Array(rowNum.value).fill(avgHeight)

      // 获取行背景色
      if (config.rowBg) {
        rowBg.value = config.rowBg
      }
    }

    const startAnimation = async () => {
      if (!isAnimationStart.value) {
        return
      }
      const config = actualConfig.value
      const { rowNum, moveNum, duration } = config
      const totalLength = rowsData.value.length

      if (totalLength < rowNum) {
        return
      }

      const index = currentIndex.value
      const _rowsData = cloneDeep(rowsData.value)
      // 将数据重新收尾拼接
      // [a,b,c,d,e,f,g]
      //    1
      // [b,c,d,e,f,g,a]
      const rows = _rowsData.slice(index)
      rows.push(..._rowsData.slice(0, index))
      currentRowsData.value = rows

      // 先将所有行的高度还原
      rowHeights.value = new Array(totalLength).fill(avgHeight)
      const waitTime = 300
      if (!isAnimationStart.value) {
        return
      }
      await new Promise(resolve => setTimeout(resolve, waitTime))

      // 将moveNum的行高度设置0
      // 这里splice将指定元素删除并替换
      rowHeights.value.splice(0, moveNum, ...new Array(moveNum).fill(0))

      currentIndex.value += moveNum
      // 判断是否到达最后一组数据
      const isLast = currentIndex.value - totalLength
      if (isLast >= 0) {
        currentIndex.value = isLast
      }
      // 让线程sleep
      if (!isAnimationStart.value) {
        return
      }
      await new Promise(resolve => setTimeout(resolve, duration - waitTime))
      await startAnimation()
    }

    const stopAnimation = () => {
      isAnimationStart.value = false
    }

    const update = () => {
      stopAnimation()
      const _actualConfig = assign(defaultConfig, props.config)
      rowsData.value = _actualConfig.data || []

      handleHeader(_actualConfig)
      handleRows(_actualConfig)

      actualConfig.value = _actualConfig
      // 展示动画
      isAnimationStart.value = true
      startAnimation()
    }

    watch(() => props.config, () => {
      update()
    })

    return {
      id,
      headerData,
      headerStyle,
      actualConfig,
      columnWidths,
      rowsData,
      rowHeights,
      rowStyle,
      rowBg,
      aligns,
      currentRowsData,
      height
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
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
    .header-item {
    }
  }

  .base-scroll-list-rows-wrapper {
    overflow: hidden;
    .base-scroll-list-rows {
      display: flex;
      align-items: center;
      transition: all 0.3s linear;
      .base-scroll-list-columns {
        height: 100%;
      }
    }
  }
}
</style>