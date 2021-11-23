const path = require('path');
// Require the common webpack config file
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// Merge what is in common with the code below
module.exports = merge(common, {
    mode: 'development',
    output: {
        // Adding a hash in the name so that the browser always downloads the new main.js file
        filename: 'main.js',
        // Resolves an absolute path to the dist folder
        path: path.resolve(__dirname, 'dist')
    }
});
