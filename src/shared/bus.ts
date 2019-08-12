/**
 * event bus
 */
function EventBus() {
  this.events = {};
  this.on = (name: string, handler: (data?: any) => void) => {
    if (this.events.hasOwnProperty(name)) {
      this.events[name].push(handler);
    } else {
      this.events[name] = [handler];
    }
  };
  this.emit = (name: string, data?: any, callback?: (result: any) => void) => {
    const handlers = this.events[name];
    if (handlers) {
      for (const handler of handlers) {
        callback && typeof callback === "function" ? callback(handler(data)) : handler(data);
      }
    }
  };
  this.off = (name: string) => {
    delete this.events[name];
  }
}

export default new EventBus();
