const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // 修改相对路径
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        data: `@import "@/styles/global.scss";`
      }
    }
  },

  chainWebpack: config => {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/.svg$/)
      .include
      .add(resolve('src/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
})