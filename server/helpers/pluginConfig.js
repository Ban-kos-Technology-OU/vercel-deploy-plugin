
const pluginId = require("./pluginId");

const getPluginConfig = (strapi) => {
  return strapi.plugin(pluginId).config;
};

module.exports = getPluginConfig;