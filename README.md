# React Webpack Tutorial

This tutorial will cover how to get started developing a client side application using these technologies:
- [ReactJS](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)
- [Npm](https://docs.npmjs.com/getting-started/what-is-npm)

You can either follow the tutorial below or just jump to the resulting code with cloning this repo:
`git clone git@github.com:jansoren/react-webpack-tutorial.git`

If you find the tutorial helpful, and maybe learned something new, please give it a star. If you have improvement suggestions please create an issue or a pull request. Enjoy :-)

## Tutorial prerequisites

- Use your preferred IDE or you can install [Atom](https://atom.io/)
- Install [NodeJS](https://nodejs.org/en/download/)

### 1. Initializing your project with npm

1. Enter your project main folder. For this tutorial I will use `react-webpack-tutorial`
1. Run `npm init` to create the project `package.json` file
1. Press <enter> on the npm init questions to get the default value
1. Install Webpack and add it to your package.json file automatically using `npm install webpack --save-dev`

You have now created an initial `package.json` file that we later on will fill with the necessary packages for installing the application with `npm install`.

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
1. Create folder `app` to contain all your application files.
1. Create file `main.js` in you `app` folder with this initial content:
  ```javascript

  ```
