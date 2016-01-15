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
1. Install Webpack and add it to your package.json file automatically using `npm install --save-dev webpack`

You have now created an initial `package.json` file that we later on will fill with the necessary packages for installing the application with `npm install`.

### 2. Create initial application files

1. Create your application Webpack config file `webpack.config.js` in main project folder with this initial content:
  ```javascript
  var config = {
    context: __dirname + "/app",
    entry: "./main.js",

    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
    },
  };
  module.exports = config;
  ```

1. Create folder `/app` to contain all your application files.
1. Create your application main file `main.js` in you `/app` folder with this initial content:
  ```javascript
  var React = require('react');
  var ReactDOM = require('react-dom');

  var Content = React.createClass({
    render: function() {
      return (
        <div>
          Hello, world!
        </div>
      );
    }
  });
  ReactDOM.render(<Content />, document.getElementById('content'));
  ```

1. Install React DOM and add it to your package.json file automatically using `npm install --save react react-dom`
1. Install Babel to transform the content of a .js file from ES6 to ES5 `npm install --save-dev babel-preset-react babel-preset-es2015 babel-loader`
1. In your `webpack.config.js` add babel-loader:
  ```javascript
  var config = {
    ...
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ],
    },
  };
  ```

1. Create folder `/dist` and create `index.html` file with content:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello React Webpack Tutorial!</title>
    </head>
    <body>
      <div id="content"></div>
      <script src="bundle.js"></script>
    </body>
  </html>
  ```

1. Run command `webpack` that will give something like this as a result:
  ```
  Hash: dd141258ef660950584c
  Version: webpack 1.12.11
  Time: 3711ms
    Asset    Size  Chunks             Chunk Names
  bundle.js  676 kB       0  [emitted]  main
    + 159 hidden modules
  ```

1. Open `/dist/index.html` to see your client side application
