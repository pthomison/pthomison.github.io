const path = require('path');

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
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	// mode: 'development',
	mode: 'production',
	resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
	module: {
		rules: loadingRules
	},
};

