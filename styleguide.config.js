/* eslint comma-dangle: off */

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
  ],
  serverPort: 4095,
  styleguideDir: './docs',
  showCode: true,
  showUsage: true,
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
  template: './src/index.html',
};
