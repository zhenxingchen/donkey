
const handleArgs = (msg) => {
  const msgResult = [];
  for (const m of msg) {
    msgResult.push(`${typeof m === 'object' ? JSON.stringify(m) : m}`);
  }
  return msgResult.join(" ");
}

const log = {
  curr: (...args) => {
    console.log("[=====================>]", handleArgs(args));
  },
  debug: (...args) => {
    console.log("[debug]", handleArgs(args));
  },
  warning: (...args) => {
    console.warn("[warning]", handleArgs(args));
  },
  error: (...args) => {
    console.error("[error]", handleArgs(args));
  },
};

export default log;