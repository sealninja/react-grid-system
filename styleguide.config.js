const { version } = require('./package.json');

module.exports = {
  title: `React Grid System (v${version})`,
  sections: [
    {
      name: 'Introduction',
      content: 'src/introduction.md',
    },
    {
      name: 'Responsive grid',
      components: 'src/grid/**/index.js',
      content: 'src/grid.md',
    },
    {
      name: 'Responsive utilities',
      components: 'src/utilities/**/index.js',
      content: 'src/utilities.md',
    },
    {
      name: 'ScreenClass Context API',
      components: 'src/context/ScreenClassProvider/index.js',
      content: 'src/context.md',
    },
  ],
  styleguideDir: './docs',
  exampleMode: 'expand',
  usageMode: 'expand',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
