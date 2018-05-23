var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    mode: "production",
    devtool: 'source-map',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
			{
				test: /\.scss$/,
				use: [
                    MiniCssExtractPlugin.loader,
					{ 
                        loader: "css-loader" 
                    },
					{ 
                        loader: "sass-loader" 
                    }
				]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader'
                }
            },
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
            title: 'DK Boilerplate',
            template: 'resources/ejs/index-prod.ejs',
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new FaviconsWebpackPlugin('./resources/assets/img/octopod.png')
    ]
};
