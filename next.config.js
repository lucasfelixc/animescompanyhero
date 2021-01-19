const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = {
  images: {
    domains: ['media.kitsu.io']
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )
    return config
  }
}

module.exports = withPlugins([
  [withAntdLess, {
    lessVarsFilePath: './src/styles/variables.less',
    cssLoaderOptions: {}
  }]
], nextConfig);
