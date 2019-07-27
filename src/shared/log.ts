
const chalk = require("chalk");

const debug = chalk.keyword("gray");
const warning = chalk.keyword("orange");
const error = chalk.bold.red;

const log = {

  debug: (...msg) => {
    console.log("[debug]", debug(...msg))
  },

  warning: (...msg) => {
    console.warn("[warning]", warning(...msg));
  },

  error: (...msg) => {
    console.error("[error]", error(...msg));
  },

};

export default log;