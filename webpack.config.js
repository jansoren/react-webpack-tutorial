var config = {
  context: __dirname + "/app",
  entry: "./main.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  }
};

module.exports = config;
