const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
    filename: 'bundle.js',
    assetModuleFilename: "assets/[name][ext]",
	},
	

