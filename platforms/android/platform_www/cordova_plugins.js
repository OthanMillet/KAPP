cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "phonegap-facebook-plugin.FacebookConnectPlugin",
    "file": "plugins/phonegap-facebook-plugin/facebookConnectPlugin.js",
    "pluginId": "phonegap-facebook-plugin",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-facebook-plugin": "0.12.0"
};
// BOTTOM OF METADATA
});