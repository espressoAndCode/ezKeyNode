var fs = require("fs");
const homedir = require("os").homedir();

// Get user home path and create full filepath
var file = homedir + "/.keyvault.json";

const ezKeyNode = {
  getkey: function(name) {
    // Guard against missing file
    try {
      if (fs.existsSync(file)) {
        const result = fs.readFileSync(file);
        keyfile = JSON.parse(result);
        value = keyfile[name]["value"];
        return value;
      }
    } catch (err) {
      // Throw away the error
      return;
    }
  }
};

module.exports = ezKeyNode;
