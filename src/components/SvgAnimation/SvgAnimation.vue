<template>
  <div>
    <div class="container">
      <svg
        width="500"
        height="200"
        viewBox="0 0 500 200"
      >
        <!-- <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10, 0) rotate(30)"></rect> -->
        <!-- 
        matrix参数可分为两组,1,3,5位置数组[2, -1, 50],2,4,6位置数组[1 2 0],
        假设原来的的坐标是_x,_y
        [2, -1, 50] 产生新的x坐标 2*_x+(-1)*_y+50=x
        [1 2 0] 产生新的y坐标 1*_x+2*_y+0=y,
        矩形的顶点坐标转换按上面的公式进行转化
        [0,0] => [50,0]
        [100,0] => [250,100]
        [100,50] => [200,200]
        [0,50] => [0,100]
      -->
        <!-- <rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="red"
          transform="matrix(2 1 -1 2 50 0)"
        ></rect> -->
        <!-- 
          stroke-dasharray="10"指绘制10像素线段，再绘制10像素空白,再绘制10像素线段以此类推
          stroke-dasharray="10 20"指绘制10像素线段，再绘制20像素空白,再绘制10像素线段以此类推
          stroke-dasharray="10 20 30"指绘制10像素线段，再绘制20像素空白,再绘制30像素线段以此类推
        -->
        <rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="none"
          stroke="blue"
          stroke-width="5"
          stroke-dasharray="10 20"
        ></rect>
      </svg>
    </div>
    <div class="container">
      <svg
        width="440"
        height="440"
        viewBox="0 0 440 440"
      >
        <circle
          cx="220"
          cy="220"
          r="200"
          stroke-width="10"
          stroke="#d1d3d7"
          fill="none"
        ></circle>
        <!-- 
          周长2*3.1415926*200 = 1257
          利用transform="matrix(0, -1, 1, 0, 0, 440)"旋转圆，让动画起点从上方开始
        -->
        <circle
          cx="220"
          cy="220"
          r="200"
          stroke-width="10"
          stroke="#00a5e0"
          fill="none"
          class="circle"
          transform="matrix(0, -1, 1, 0, 0, 440)"
        ></circle>
      </svg>
    </div>
    <div class="container">
      <svg
        width="200"
        height="200"
      >
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          stroke-width="8"
          stroke="#d1d3d7"
          fill="none"
        ></rect>
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          stroke-width="8"
          stroke="#00a5e0"
          fill="none"
          transform="matrix(0, 1, -1, 0, 200, 0)"
          class="rect"
        ></rect>
      </svg>
    </div>
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
  margin: 0 auto 20px;
  border: 1px solid #000;
}

.circle {
  animation: circle 5s linear infinite;
}

.rect {
  animation: rect 5s linear infinite;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 1257;
  }
}

@keyframes rect {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 800;
  }
}
</style>