const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

var loadingRules = [{
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
      	postcssOptions: {
	        plugins: function () { // post css plugins, can be exported to postcss.config.js
	          return [
	            require('precss'),
	            require('autoprefixer')
	          ];
	        }
      	}
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
]



module.exports = {
	entry: './src/index.js',
	output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
		path: path.resolve(__dirname) + "/docs/",
	},
	// mode: 'development',
	mode: 'production',
	resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
	module: {
		rules: loadingRules
	},
  devServer: {
    watchFiles: ['src/*.js', 'src/*.scss', 'index.html'],
  },
	plugins: [
    new HtmlWebpackPlugin({
    	template: 'src/index.html'
    }),
  ],
	optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
};

