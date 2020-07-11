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

    <!-- logo描边 -->
    <div class="container">
      <svg
        viewBox="0 0 1024 1024"
        width="200"
        height="200"
      >
        <path
          class="logo"
          d="M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z"
          p-id="2695"
        ></path>
      </svg>
    </div>

    <div class="container">
      <svg
        width="400"
        height="400"
        class="line-container"
      >
        <line
          x1="0"
          y1="50"
          x2="400"
          y2="50"
          fill="none"
          stroke-width="20"
          stroke="red"
        ></line>
        <line
          class="line"
          x1="0"
          y1="100"
          x2="400"
          y2="100"
          fill="none"
          stroke-width="20"
          stroke="red"
        ></line>
      </svg>
    </div>

    <!-- smil动画 -->
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <!-- 
            写上需要实现动画的属性
            to指属性值变到某个值
            begin动画从几秒后开始
          -->
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="y" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>

      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { onMounted } from 'vue'
export default {
  name: 'SvgAnimation',

  props: {
  },

  setup(ctx) {
    onMounted(() => {
      const logo = document.getElementsByClassName('logo')[0]
      console.log(logo.getTotalLength()) // 获取logo路径长度
    })

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

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 10;
  animation: logo 5s linear 1 forwards;
}

@keyframes logo {
  0% {
    fill: white;
    stroke-dasharray: 6885;
    stroke-dashoffset: 6885;
    stroke: #333;
  }
  50% {
    fill: white;
    stroke-dasharray: 6885;
    stroke-dashoffset: 0;
    stroke: #333;
  }
  75% {
    fill: red;
    stroke: #fff;
  }
  100% {
    fill: blue;
    stroke: #fff;
  }
}

.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s ease-out;
}

.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}
</style>