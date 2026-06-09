// Webpack config for bundling Looker Studio Community Viz
// Bundles yara-kpi-card.js + the @google/dscc SDK into a single deliverable
// that runs in Looker's iframe sandbox.

const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './yara-kpi-card.js',
  output: {
    filename: 'yara-kpi-card-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
};
