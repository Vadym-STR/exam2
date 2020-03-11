const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    mode: 'production',
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dev"),
        filename: "app.min.js",
    },
    module: {
        rules: webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;
