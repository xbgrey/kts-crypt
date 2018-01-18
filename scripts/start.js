const WebpackDevServer = require("webpack-dev-server");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const chalk = require("chalk");
const config = require('../config/webpack.config.debug')();
const port = 3001;
const host = 'localhost';
const compiler = require("webpack")(config);

compiler.plugin("invalid", function () {
    console.log("Compiling...");
});

compiler.plugin("done", function (stats) {
    var messages = formatWebpackMessages(stats.toJson({}, true));

    if (messages.errors.length) {
        console.log(chalk.red("Failed to compile."));
        console.log();
        messages.errors.forEach(message => {
            console.log(message);
            console.log();
        });
        return;
    }

    if (messages.warnings.length) {
        console.log(chalk.yellow("Compiled with warnings."));
        console.log();
        messages.warnings.forEach(message => {
            console.log(message);
            console.log();
        });
        // Teach some ESLint tricks.
        console.log(
            "You may use special comments to disable some warnings."
        );
        console.log(
            "Use " +
            chalk.yellow("// eslint-disable-next-line") +
            " to ignore the next line."
        );
        console.log(
            "Use " +
            chalk.yellow("/* eslint-disable */") +
            " to ignore all warnings in a file."
        );
    }
});

var devServer = new WebpackDevServer(compiler, {
    hot: true,
    quiet: true,
    host: host,
});

devServer.listen(port, err => {
    if (err) {
        return console.log('err', err);
    }

    console.log(chalk.cyan("Starting the development server..."));
    console.log();

    openBrowser("http://" + host + ":" + port + "/");
});