const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/js/app.js',
    output: {
        filename: 'bundle.js', // Output JavaScript bundle
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Loaders for SCSS
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html', // Path to your HTML file
            filename: 'index.html', // Output HTML file
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Output CSS file
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
        },
        port: 8080, // Port for the dev server
    },
};
