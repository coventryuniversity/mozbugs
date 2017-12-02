const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const PUBLIC = process.env.PUBLIC_DEV || HOST + ':' + PORT;
const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  host: HOST,
  port: PORT,
  public: PUBLIC,
  ENV: ENV,
  HMR: HMR,
  AOT: AOT
};



/**
 * Webpack configuration
 */
module.exports = function (options) {
  return webpackMerge(commonConfig, {

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'cheap-module-source-map',

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: helpers.root('dist'),

      // /**
      //  * Specifies the name of each output file on disk.
      //  * IMPORTANT: You must not specify an absolute path here!
      //  *
      //  * See: http://webpack.github.io/docs/configuration.html#output-filename
      //  */
      // filename: '[name].bundle.js',

      // /**
      //  * The filename of the SourceMaps for the JavaScript files.
      //  * They are inside the output.path directory.
      //  *
      //  * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
      //  */
      // sourceMapFilename: '[file].map',

      // /** The filename of non-entry chunks as relative path
      //  * inside the output.path directory.
      //  *
      //  * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
      //  */
      // chunkFilename: '[id].chunk.js',

      // library: 'ac_[name]',
      // libraryTarget: 'var',
    },

    module: {

      rules: [

        /**
         * Css loader support for *.css files (styles directory only)
         * Loads external css styles into the DOM, supports HMR
         *
         */
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader'],
        //   include: [helpers.root('src')]
        // },

        /**
         * Sass loader support for *.scss files (styles directory only)
         * Loads external sass styles into the DOM, supports HMR
         *
         */
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     { loader: 'sass-loader', options: { includePaths: [helpers.root('node_modules')] } }
        //   ],
        // },
      ]
    },

    plugins: [      

      // /**
      //  * Plugin: DefinePlugin
      //  * Description: Define free variables.
      //  * Useful for having development builds with debug logging or adding global constants.
      //  *
      //  * Environment helpers
      //  *
      //  * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      //  *
      //  * NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
      //  */
      // new DefinePlugin({
      //   'ENV': JSON.stringify(METADATA.ENV),
      //   'HMR': METADATA.HMR,
      //   'process.env.ENV': JSON.stringify(METADATA.ENV),
      //   'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
      //   'process.env.HMR': METADATA.HMR
      // }),

      // /**
      //  * Plugin LoaderOptionsPlugin (experimental)
      //  *
      //  * See: https://gist.github.com/sokra/27b24881210b56bbaff7
      //  */
      // new LoaderOptionsPlugin({
      //   debug: true,
      //   options: {

      //   }
      // }),

      // new HotModuleReplacementPlugin(),
    ],

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     */
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      hot: METADATA.HMR,
      public: METADATA.public,
      historyApiFallback: true,
      watchOptions: {
        ignored: /node_modules/
      }
    },

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  });
}
