<template>
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
      <rect
        x="0"
        y="0"
        width="100"
        height="50"
        fill="red"
        transform="matrix(2 1 -1 2 50 0)"
      ></rect>
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