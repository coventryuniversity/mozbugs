var path = require('path');
var fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp);

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('source/js/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('source/js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths
};



// config before publish: we're in ./packages/react-scripts/config/
if (__dirname.indexOf(path.join('packages', 'react-scripts', 'config')) !== -1) {
  module.exports = {
    appBuild: resolveOwn('../../../build'),
    appPublic: resolveOwn('../template/source'),
    appHtml: resolveOwn('../template/source/index.html'),
    appIndexJs: resolveOwn('../template/source/js/index.js'),
    appPackageJson: resolveOwn('../package.json'),
    appSrc: resolveOwn('../template/source/js'),
    appNodeModules: resolveOwn('../node_modules'),
    ownNodeModules: resolveOwn('../node_modules'),
    nodePaths: nodePaths
  };
}
