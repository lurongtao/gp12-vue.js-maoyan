const path = require('path')

module.exports = {
  publicPath: 'http://fe.gp12.cn:8088',
  
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        styles: path.resolve(__dirname, './src/assets/styles'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils'),
        mixins: path.resolve(__dirname, './src/mixins'),
      }
    }
  },

  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://dev.gp12.cn',
        changeOrigin: true
      },
      '/dianying': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}