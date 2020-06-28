const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/imooc.davav.js')

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    name: 'imoocDataV', // 模块名称
    format: 'umd' // 输出的模块协议
  }
}