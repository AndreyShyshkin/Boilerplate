const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(commonConfig, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
	},
	plugins: [new CleanWebpackPlugin()],
})
