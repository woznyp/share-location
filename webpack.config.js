const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './frontend/',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5555,
        host: '10.157.50.173'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.woff2/,
                loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg|mp3|ico)$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            filename: './index.html'
        })
    ]
};
