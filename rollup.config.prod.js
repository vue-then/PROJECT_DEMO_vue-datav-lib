const path = require('path')
const resolve = require('rollup-plugin-node-resolve') // 可以将第三方模块打包进项目里，这样即使不安装第三方模块也能使用
const commonjs = require('rollup-plugin-commonjs') // 可以将commonjs模块打包
const babel = require('rollup-plugin-babel') // 将es6语法转es5
const json = require('rollup-plugin-json') // 打包json文件
const { terser } = require('rollup-plugin-terser') // 打包压缩
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss') // 支持css预处理

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.min.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.min.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      name: 'imoocDataV', // 模块名称
      format: 'umd', // 输出的模块协议
      globals: {
        'vue': 'vue'
      }
    },
    {
      file: outputEsPath,
      name: 'imoocDataV', // 模块名称P
      format: 'es' // 输出的es6模块协议
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    terser(),
    vue(),
    postcss({
      plugins: []
    })
  ],
  external: ['vue'] // 外部引用模块。即使有resolve插件也会被引入到外部
}