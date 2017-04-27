/* eslint comma-dangle: off */

const path = require('path');
const version = require('./package.json').version;

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
  updateWebpackConfig: (webpackConfig) => {
    const dirs = [
      path.resolve(__dirname, 'src'),
    ];

    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dirs,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
        },
      }
    );
    return webpackConfig;
  },
  template: './src/index.html',
};
