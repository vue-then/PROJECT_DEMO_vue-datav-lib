// es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
import Test from './Test.vue'

export default function(Vue) {
  Vue.component(Test.name, Test)
}