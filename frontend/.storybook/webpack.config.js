const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.(js|jsx|ts|tsx)$/,
      options: {
          presets: ['@babel/react'],
          plugins: [
              ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
              }]
          ]
      },
  });

  config.module.rules.push({
      test: /\.less$/,
      loaders: [
          'style-loader',
          'css-loader',
          {
              loader: 'less-loader',
              options: {
                lessOptions: {
                    javascriptEnabled: true
                }
              }
          }
      ],
      include: [
        path.resolve(__dirname, '../src'),
        /[\\/]node_modules[\\/].*antd/
      ]
  });

  return config;
};