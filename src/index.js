// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Test from './components/Test/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import ImoocLoading from './components/ImoocLoading/index'
import ImoocFlyBox from './components/ImoocFlyBox/index'
import ImoocLogo from './components/ImoocLogo/index'
import VueCountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'
import Container from './components/Container/index'

export default function(Vue) {
  Vue.use(Test)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(ImoocLoading)
  Vue.use(ImoocFlyBox)
  Vue.use(ImoocLogo)
  Vue.use(VueCountTo)
  Vue.use(VueEcharts)
  Vue.use(BaseScrollList)
  Vue.use(Container)
}