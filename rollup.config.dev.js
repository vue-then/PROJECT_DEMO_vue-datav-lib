const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.davav.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.davav.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      name: 'imoocDataV', // 模块名称
      format: 'umd' // 输出的模块协议
    },
    {
      file: outputEsPath,
      name: 'imoocDataV', // 模块名称P
      format: 'es' // 输出的es6模块协议
    }
  ]
}