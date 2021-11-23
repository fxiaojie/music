const path = require("path")

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      // 别名配置
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}