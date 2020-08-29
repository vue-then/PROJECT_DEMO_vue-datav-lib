<template>
  <div :class="[className, 'echarts']">
  </div>
</template>

<script type="text/ecmascript-6">
import { watch, onMounted } from 'vue'
import Echarts from 'echarts' // rollup配置了外部引入echarts，所以无需npm安装echarts
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'VueEcharts',

  props: {
    options: Object,
    theme: [String, Object]
  },

  setup(ctx) {
    let dom
    let chart
    const className = `echarts${uuidv4()}`

    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0]
        chart = Echarts.init(dom, ctx.theme)
      }
      ctx.options && chart.setOption(ctx.options)
    }

    onMounted(() => {
      initChart()
    })

    watch(() => ctx.options, () => {
      initChart()
    })

    return {
      className
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  height: 100%;
  width: 100%;
}
</style>