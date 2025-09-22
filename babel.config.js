module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // safe for Jest
    ["@babel/preset-react", { runtime: "automatic" }], // correct place for runtime option
  ],
};
