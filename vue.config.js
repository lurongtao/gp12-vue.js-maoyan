const path = require('path')

module.exports = {
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
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}