const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Add workspace roots to watchFolders
config.watchFolders = [workspaceRoot];

// Configure workspace resolution
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Add support for monorepo packages
config.resolver.extraNodeModules = {
  '@monorepo-playground-app/components': path.resolve(workspaceRoot, 'packages/components'),
  '@monorepo-playground-app/utils': path.resolve(workspaceRoot, 'packages/utils'),
};

module.exports = config;
