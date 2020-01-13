module.exports = {
  test: /\.erb$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: [{
    loader: 'rails-erb-loader',
    options: {
      runner: ('DISABLE_SPRING=1 ' + /^win/.test(process.platform) ? 'ruby ' : '') + 'bin/rails runner'
    }
  }]
}
