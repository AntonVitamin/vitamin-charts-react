import path from 'path';

const config = {
  entry: './src/index',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve('/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve('public'),
  },
  module: {
    rules: [
      { test: /\.js$|jsx/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /(\.css)$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode: 'development',
};

export default config;
