/* eslint comma-dangle: off */
/* eslint import/no-extraneous-dependencies: off */

const { createConfig, babel, postcss } = require('webpack-blocks');

const { version } = require('./package.json');

module.exports = {
  title: `React Grid System (v${version})`,
  sections: [
    {
      name: 'Responsive grid',
      components: './src/grid/**/index.jsx',
      content: './src/grid/Readme.md'
    },
    {
      name: 'Responsive utilities',
      components: './src/utilities/**/index.jsx',
      content: './src/utilities/Readme.md'
    }
  ],
  serverPort: 4095,
  styleguideDir: './docs',
  exampleMode: 'expand',
  usageMode: 'expand',
  webpackConfig: createConfig([
    babel(),
    postcss()
  ])
};
