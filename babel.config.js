module.exports = {
  presets: [
    ['@babel/env', {
      modules: false,
      targets: '> 0.25%, not dead',
    }],
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
};
