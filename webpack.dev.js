var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
		port: 9000,
		open: true,
        lazy: false
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
			{
				test: /\.scss$/,
				use: [
					{ 
                        loader: "style-loader" 
                    },
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
            title: 'Weather Forecast',
            template: 'resources/ejs/index-dev.ejs'
        }),
        new FaviconsWebpackPlugin('./resources/assets/img/octopod.png')
    ]
};
