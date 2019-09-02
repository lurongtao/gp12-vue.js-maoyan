const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        styles: path.resolve(__dirname, './src/assets/styles'),
      }
    }
  }
}