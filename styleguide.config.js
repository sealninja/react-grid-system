const path = require('path');

module.exports = {
  title: 'React Grid System',
  sections: [
    {
      name: 'Grid',
      components: './src/grid/**/index.js',
      content: './src/grid/Readme.md',
    },
    {
      name: 'Responsive utilities',
      components: './src/utilities/**/index.js',
      content: './src/utilities/Readme.md',
    },
  ],
  serverPort: 4095,
  styleguideDir: './html',
  updateWebpackConfig: webpackConfig => {
    const dirs = [
      path.resolve(__dirname, 'src'),
    ];

    webpackConfig.module.loaders.push(
      {
        test: /\.js$/,
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
