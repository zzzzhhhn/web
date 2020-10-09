const path = require("path");
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.js",
        "@views": resolve("src/views"),
        "@comp": resolve("src/components"),
        "@assets": resolve("src/assets"),
        "@utils": resolve("src/utils"),
        "@mixins": resolve("src/mixins"),
        "@public": resolve("public"),
        "@plugins": resolve("src/plugins")
      }
    }
  },
  devServer: {
    open: true,
    port: 2844,
    disableHostCheck: true
  },
};
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
