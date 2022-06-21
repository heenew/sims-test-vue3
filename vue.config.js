const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigine: true,
      },
    },
  },

  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8181",
  //       changeOrigine: true,
  //     },
  //   },
  // },
});
