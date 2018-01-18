const config = require('../config/webpack.config.debug')();

require("webpack")(config).run((err, stats) => {
    if (err) {
        printErrors('Failed to compile.', [err]);
    }
});