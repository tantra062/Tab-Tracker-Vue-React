const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: "index.html",
    inject: 'body'
})

module.exports ={
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 8082
    },
    plugins: [
        HTMLWebpackPluginConfig,
    ]   
}