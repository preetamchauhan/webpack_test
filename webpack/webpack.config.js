module.exports = {
    entry: ["./utils.js", "./app.js"],
    output:{
        filename:"bundle.js"
    },
    module:{
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
            },
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [{
                  loader: "jshint-loader",
                  // more options in the optional jshint object
                  options: {  // ⬅ formally jshint property
                    camelcase: true,
                    emitErrors: false,
                    failOnHint: false
                  }
                }]
            }
        ]
    },
    resolve:{
        extensions:['.js','.es6']
    }
}