const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, '../src'),
		},
		allowedHosts: "all",
		hot: true,
		port: 8080,
		watchFiles: [path.join(__dirname, '../src/**/*')],
		open: 'index.html',
	},
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
})
