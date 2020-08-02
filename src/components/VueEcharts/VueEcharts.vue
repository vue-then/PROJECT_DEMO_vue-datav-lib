<template>
  <div class="echarts">
    xx
  </div>
</template>

<script type="text/ecmascript-6">
import { watch, onMounted } from 'vue'
import Echarts from 'echarts' // rollup配置了外部引入echarts，所以无需npm安装echarts

export default {
  name: 'VueEcharts',

  props: {
    options: Object,
    theme: [String, Object]
  },

  setup(ctx) {
    let dom
    let chart

    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName('echarts')[0]
        chart = Echarts.init(dom, ctx.theme)
      }
      chart.setOption(ctx.options)
    }

    onMounted(() => {
      initChart()
    })

    watch(() => ctx.options, () => {
      initChart()
    })


  }
}
</script>

<style lang="scss" scoped>
.echarts {
  height: 100%;
}
</style>