// const withLess = require('@zeit/next-less')

// module.exports = withLess({
//   cssModules: true,
//   webpack: function (config) {
//     return config;
//   },
//   css: [
//     { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }
//   ]
// });

// next.config.js
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
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
});
