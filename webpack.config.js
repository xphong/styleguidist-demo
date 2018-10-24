const babelConfig = require('./babel.config')();

module.exports = {
  module: {
    rules: [
      {
        test: /\.*sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babelConfig.presets,
            plugins: babelConfig.plugins
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      }
    ]
  }
};
