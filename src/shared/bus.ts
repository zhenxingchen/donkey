/**
 * events
 * @type {{}}
 */
const EVENTS = {};

/**
 * event bus
 */
const bus = {
  on: (name: string, handler: (data?: any) => void) => {
    if (EVENTS.hasOwnProperty(name)) {
      EVENTS[name].push(handler);
    } else {
      EVENTS[name] = [handler];
    }
  },
  emit: (name: string, data?: any, callback?: (result: any) => void) => {
    const handlers = EVENTS[name];
    if (handlers) {
      for (const handler of handlers) {
        callback && typeof callback === "function" ? callback(handler(data)) : handler(data);
      }
    }
  },
  off: (name: string) => {
    delete EVENTS[name];
  }
};

export default bus;
