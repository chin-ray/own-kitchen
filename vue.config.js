const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    // https:true,
    port: 8081,
    client: {
      webSocketURL: 'ws://0.0.0.0:8081/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: {
    //   "/api": {
    //     target: "http://**.**.***.*** ", //这是服务器地址
    //   },
    // },
  },
  transpileDependencies: true,
  publicPath: './', // 修改相对路径
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  css: {
    loaderOptions: {
      //define global scss variable
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
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