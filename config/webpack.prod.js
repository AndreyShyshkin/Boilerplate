const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(commonConfig, {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			parallel: true,
			terserOptions: {
			  output: {
			    comments: false,
			  },
			},
			extractComments: false,
	      }), new CssMinimizerPlugin()],
	},
	plugins: [new CleanWebpackPlugin()],
})
