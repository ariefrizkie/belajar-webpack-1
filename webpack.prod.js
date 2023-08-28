const config = require('./webpack.config');
const {merge} = require('webpack-merge');
const path = require('path');
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
    mode: 'production',
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'img/[hash][ext]',
        clean: true
    },
    optimization: {
        minimizer: [
        `...`,
        new CssMinimizerPlugin(),
        ],
      },
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css',
    }),
    new PurgeCSSPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      }),
    ],
});