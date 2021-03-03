const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve('./src/resources.scss'),
          }
        }
      ]
    }
  );
  return config;
};
