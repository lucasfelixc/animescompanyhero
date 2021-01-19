const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
// const withImages = require('next-images')

module.exports = withPlugins([
  [withAntdLess, {
    lessVarsFilePath: './src/styles/variables.less',
    cssLoaderOptions: {
    //   https://github.com/webpack-contrib/css-loader#object
    //
    //   sourceMap: true, // default false
    //   esModule: false, // default false
    //   modules: {
    //     exportLocalsConvention: 'asIs',
    //     exportOnlyLocals: true,
    //     mode: 'pure',
    //     getLocalIdent: [Function: getCssModuleLocalIdent]
    //   }
    },
    // Other Config Here...

    webpack(config) {
      config.module.rules.push(
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        }
      )
      return config
    },
  }],
  // [withImages, {
  //   esModule: true
  // }]
]);
