const {
  override,
  adjustStyleLoaders,
  overrideDevServer,
} = require("customize-cra");
const path = require('path');

module.exports = {
  webpack: override(
    // 为所有scss文件引入global.scss
    adjustStyleLoaders(rule => {
      if (rule.test.toString().includes("scss")) {
        rule.use.push({
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: path.resolve(__dirname, './src/global.scss') //全局变量路径
          }
        });
      }
    })
  ),
  devServer: overrideDevServer(
    // dev server plugin
  )
};
