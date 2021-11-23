const path = require('path');
// Require the common webpack config file
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Merge what is in common with the code below
module.exports = merge(common,  {
    // Change between development and production
    mode: 'production',
    output: {
        // Adding a hash in the name so that the browser always downloads the new main.js file
        filename: 'main.[hash].js',
        // Resolves an absolute path to the dist folder
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new CleanWebpackPlugin()]
});
