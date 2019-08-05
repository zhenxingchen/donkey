import IItem from "./item";

export default interface ISpan extends IItem {
  tag: "span";
  text?: string;
  attr?: {
    style?: string | object;
    className?: string;
  }
  onClick?: (e: Event) => void;
}
