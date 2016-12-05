process.env.NODE_ENV = 'development';

var chalk = require('chalk');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var historyApiFallback = require('connect-history-api-fallback');
var detect = require('detect-port');
var clearConsole = require('react-dev-utils/clearConsole');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var openBrowser = require('react-dev-utils/openBrowser');
var prompt = require('react-dev-utils/prompt');
var config = require('./config/webpack.config.dev');
var paths = require('./config/paths');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
var DEFAULT_PORT = process.env.PORT || 3000;
var compiler;
var handleCompile;

function setupCompiler(host, port, protocol) {
  // "Compiler" is a low-level interface to Webpack.
  // It lets us listen to some events and provide our own custom messages.
  compiler = webpack(config, handleCompile);

  var dashboard = new Dashboard();
  compiler.apply(new DashboardPlugin(dashboard.setData));
}

function addMiddleware(devServer) {

  devServer.use(historyApiFallback({
    // Paths with dots should still use the history fallback.
    // See https://github.com/facebookincubator/create-react-app/issues/387.
    disableDotRule: true,
  }));

  // Finally, by now we have certainly resolved the URL.
  // It may be /index.html, so let the dev server try serving it again.
  devServer.use(devServer.middleware);
}

function runDevServer(host, port, protocol) {
  var devServer = new WebpackDevServer(compiler, {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    // This is confusing because those files won’t automatically be available in
    // production build folder unless we copy them. However, copying the whole
    // project directory is dangerous because we may expose sensitive files.
    // Instead, we establish a convention that only files in `public` directory
    // get served. Our build script will copy `public` into the `build` folder.
    // In `index.html`, you can get URL of `public` folder with %PUBLIC_PATH%:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
    // Note that we only recommend to use `public` folder as an escape hatch
    // for files like `favicon.ico`, `manifest.json`, and libraries that are
    // for some reason broken when imported through Webpack. If you just want to
    // use an image, put it in `src` and `import` it from JavaScript instead.
    contentBase: paths.appPublic,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: config.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === "https",
    host: host
  });

  // Our custom middleware proxies requests to /index.html or a remote API.
  addMiddleware(devServer);

  // Launch WebpackDevServer.
  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    clearConsole();
    console.log(chalk.cyan('Starting the development server...'));
    console.log();
    openBrowser(protocol + '://' + host + ':' + port + '/');
  });
}

function run(port) {
  var protocol = process.env.HTTPS === 'true' ? "https" : "http";
  var host = process.env.HOST || 'localhost';
  setupCompiler(host, port, protocol);
  runDevServer(host, port, protocol);
}

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

  clearConsole();
  var question =
    chalk.yellow('Something is already running on port ' + DEFAULT_PORT + '.') +
    '\n\nWould you like to run the app on another port instead?';

  prompt(question, true).then(shouldChangePort => {
    if (shouldChangePort) {
      run(port);
    }
  });
});
