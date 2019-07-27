/**
 * event bus
 */
const EventBus = {
  events: {},
  on: (eventName: string, eventHandler: (data?: any) => void) => {
    if (this.event.hasOwnProperty(eventName)) {
      this.events.eventName.push(eventHandler);
    } else {
      this.events.eventName = [eventHandler];
    }
  },
  emit: (eventName: string, data?: any) => {
    const handlers = this.eventName;
    for (const handler of handlers) {
      handler(data);
    }
  },
  off: (eventName: string) => {
    delete this.events.eventName;
  },
};

export default EventBus;
