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
    console.log("[DEBUG]", handleArgs(args));
  },
  warning: (...args) => {
    console.warn("[WARN]", handleArgs(args));
  },
  error: (...args) => {
    console.error("[ERROR]", handleArgs(args));
  },
};

export default log;