// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Test from './Test.vue'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'

export default function(Vue) {
  Vue.component(Test.name, Test)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
}