# React Webpack Tutorial

This is a tutorial that will cover:
- ReactJs
- Webpack
- Npm

You can either follow the tutorial below or just jump to the resulting code with cloning this repo `git clone git@github.com:jansoren/react-webpack-tutorial.git`

If you find the tutorial helpful, and maybe learned something new, please give it a star. If you have improvement suggestions please create an issue or a pull request. Enjoy :-)

## Tutorial Prerequisites

- Use your preferred IDE or you can install [Atom](https://atom.io/)
- Install [NodeJS](https://nodejs.org/en/download/)

### 1. Initializing project with npm

1. Enter your project main folder. For this tutorial I will use `react-webpack-tutorial`
1. Run `npm init` to create the project `package.json` file
1. Press <enter> on the npm init questions to get the default value
1. Install Webpack and add it to your package.json file using `npm install webpack --save-dev`

You now have created an initial `package.json` file that we will later in the tutorial fill with the necessary packages for installing the application with `npm install`.

### 2. Create Webpack config file

1. Create file `webpack.config.js` in main project folder with this initial content:
  ```javascript
  var config = {
    context: __dirname + "/app",
    entry: "./main.js",

    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
    }
  };
  module.exports = config;
  ```
1.
