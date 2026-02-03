module.exports = {
    entry: './src/index.jsx',
    output: {        
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: __dirname + '/dist',
        },
        port: 9000,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
};