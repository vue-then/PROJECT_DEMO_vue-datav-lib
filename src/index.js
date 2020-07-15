// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Test from './components/Test/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import ImoocLoading from './components/ImoocLoading/index'

export default function(Vue) {
  Vue.use(Test)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(ImoocLoading)
}