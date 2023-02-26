const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'js/[name].[contenthash].js',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
})
