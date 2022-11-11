const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const RemarkHTML = require('remark-html');

var loadingRules = [
	{
    test: /\.(scss)$/,
    use: [
	    {
	      loader: 'style-loader',
	    }, 
	    {
	      loader: 'css-loader',
	    }, 
	    {
	      loader: 'postcss-loader',
	      options: {
	      	postcssOptions: {
		        plugins: function () {
		          return [
		            require('autoprefixer')
		          ];
		        }
	      	}
	      }
	    }, 
	    {
	      loader: 'sass-loader'
	    },
    ]
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  },
	{
	    test: /\.(jpe?g|png|gif|svg)$/i, 
	    type: 'asset',
	},

  {
    test: /\.md$/,
    use: [
      {
        loader: "html-loader",
      },
      {
        loader: "remark-loader",
        options: {
          remarkOptions: {
            plugins: [RemarkHTML],
          },
        },
      },
    ],
  },

]


module.exports = {
	entry: './src/index.js',
	output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
		path: path.resolve(__dirname) + "/docs/",
	},
	mode: 'development',
	// mode: 'production',
	resolve: { alias: { vue: 'vue/dist/vue.esm-bundler.js' } },
	module: {
		rules: loadingRules
	},
  devServer: {
    watchFiles: ['src/*.js', 'src/*.scss', 'src/*.vue','index.html'],
  },
	plugins: [
    new HtmlWebpackPlugin({
    	template: 'src/index.html'
    }),
    new VueLoaderPlugin(),
  ],
	optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
};

