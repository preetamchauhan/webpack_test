var path = require('path');
var webpack = require('webpack');
// var commonPlugin = new webpack.optimize. ('shared.js'); //new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    // context: path.resolve('js'),
    entry: {
        about: "/js/about.js",
        home: "/js/home.js",
        index: "/src/index.ts"
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js",
        libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
    },
    // plugins: [commonPlugin],
    devServer: {
        contentBase: 'public'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "jshint-loader",
                        // more options in the optional jshint object
                        options: { // ⬅ formally jshint property
                            camelcase: true,
                            emitErrors: false,
                            failOnHint: false
                        }
                    }
                ]
            }, {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.es6', '.ts', '.tsx']
    }
}
