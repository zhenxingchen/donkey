
export default interface ISpan {
  tag: "span";
  cols?: string | string[];
  label?: string;
  text?: string;
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  }
  onClick?: (target: HTMLSpanElement) => void;
}
