const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const postcssUnits = require('postcss-units');
const pkg = require('./package');

const distFolder = 'dist';

const config = {
    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    ecma: 8,
                },
            }),
        ],
    },

    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
        main: './src/ExamplePackage/index.ts',
    },

    output: {
        path: path.resolve(__dirname, distFolder),
        filename: 'bundle.[hash].js',
        publicPath: './',
        devtoolModuleFilenameTemplate: info =>
            'file:///' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                postcssUnits({
                                    precision: 4,
                                }),
                            ],
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin([
            `${distFolder}/bundle.*.js`,
            `${distFolder}/*.html`,
        ]),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: path.resolve(__dirname, distFolder, 'manifest.json'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                APPLICATION_NAME: JSON.stringify('TRD Controls Showcase'),
                VERSION: JSON.stringify(pkg.version)
            },
        }),
        new HtmlWebpackPlugin({
            template: 'src/ExamplePackage/index.html',
            filename: 'index.html',
            title: 'React Table',
            meta: {
                'application-name': pkg.name,
                version: pkg.version,
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1.0',
            }
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, distFolder, '*.dll.js'),
        })
    ],
};

module.exports = config;
