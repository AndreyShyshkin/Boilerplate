const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const environment = require('./environment')

module.exports = {
	entry: {
		main: './src/index.js',
	},
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'image',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							disable: environment.isDev,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
}
