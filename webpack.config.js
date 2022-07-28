const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		assetModuleFilename: "assets/[name][ext]",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(c|sa|sc)css$/i,
				use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", 'sass-loader'],
			},
			{ 
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, 
        type: "asset/resource" 
      },
		]
	}
}