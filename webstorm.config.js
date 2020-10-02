"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  context: path.resolve(__dirname, "./"),
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
      "@views": resolve("src/views"),
      "@comp": resolve("src/components"),
      "@assets": resolve("src/assets"),
      "@utils": resolve("src/utils"),
      "@mixins": resolve("src/mixins"),
      "@public": resolve("public"),
      "@plugins": resolve("src/plugins")
    }
  }
};
