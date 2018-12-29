const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distFolder = 'dist';

module.exports = {
    devtool: 'source-map',

    entry: {
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: path.resolve(__dirname, distFolder),
        filename: '[name].[hash].dll.js',
        library: '[name]_[hash]',
    },

    plugins: [
        new CleanWebpackPlugin(distFolder),
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.resolve(__dirname, distFolder, 'manifest.json'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                ],
            },
        ],
    },
};
