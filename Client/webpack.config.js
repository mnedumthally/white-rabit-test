module.exports = {
    entry: './src/index.js',
    watch:true,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/../Server/public/views/',
      publicPath: '/',
      filename: 'build.js'
    }
};
