import * as IEvents from "./event";
import {IKeyBoradEvent} from "./event";

/**
 * a
 */
export default interface IALink {
  tag: "a";
  text: string;
  attr?: {
    id?: string,
    name?: string,
    href?: string,
    target?: string,
    style?: string | object,
    className?: string
  };
  event?:
    IEvents.IMouseEvent
    | IEvents.IFormEvent
    | IEvents.IKeyBoradEvent
    | IEvents.IWindowEvent;
}
