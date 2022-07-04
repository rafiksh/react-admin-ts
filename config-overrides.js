const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "&features": path.resolve(__dirname, "src/features"),
      "&components": path.resolve(__dirname, "src/components"),
      "&config": path.resolve(__dirname, "src/config"),
      "&assets": path.resolve(__dirname, "src/assets"),
      "&route": path.resolve(__dirname, "src/route"),
      "&locales": path.resolve(__dirname, "src/locales"),
      "&utils": path.resolve(__dirname, "src/utils"),
    },
  };
  return config;
};
