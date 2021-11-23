const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Custom webpack config file
module.exports = {
    devtool: false,
    entry: './src/index.js',
    // This generates the index.html page in the dist folder automatically with the right js file
    // Accordingly to the template file (which has no script tag)
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Inject styles into dom
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader'] // This will take care of our image by requiring it
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader', // This will make the require understandable by js
                    options: {
                        name: '[name].[hash].[ext]', // Renaming the image for cashing issues
                        outputPath: 'images'
                    }
                }
            }
        ]
    }
};
