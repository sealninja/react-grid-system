const { version } = require('./package.json');

module.exports = {
  title: `React Grid System (v${version})`,
  sections: [
    {
      name: 'Responsive grid',
      components: './src/grid/**/index.jsx',
      content: './src/grid/Readme.md',
    },
    {
      name: 'Responsive utilities',
      components: './src/utilities/**/index.jsx',
      content: './src/utilities/Readme.md',
    },
    {
      name: 'ScreenClass Context API',
      components: './src/context/ScreenClassProvider/index.jsx',
      content: './src/context/Readme.md',
    },
  ],
  serverPort: 4095,
  styleguideDir: './docs',
  exampleMode: 'expand',
  usageMode: 'expand',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
