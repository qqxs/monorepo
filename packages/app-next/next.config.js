const withTM = require("next-transpile-modules")(["@mono/common"]); // pass the modules you would like to see transpiled

module.exports = withTM();
