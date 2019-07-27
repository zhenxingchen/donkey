import * as IEvents from "./event";
import {IKeyBoradEvent} from "./event";

/**
 * button
 */
export default interface IButton {
  tag: "button";
  text: string;
  attr?: {
    style?: string | object,
    className?: string
  },
  event:
    IEvents.IMouseEvent
    | IEvents.IFormEvent
    | IEvents.IKeyBoradEvent
    | IEvents.IWindowEvent;
}
