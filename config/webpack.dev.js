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
		hot: true,
		port: 9000,
		watchFiles: [path.join(__dirname, '../src/**/*')],
		open: 'index.html',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
})
