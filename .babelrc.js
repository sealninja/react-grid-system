module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: "> 0.5%, last 2 versions, Firefox ESR, not dead",
      },
    ],
    "@babel/react",
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};
