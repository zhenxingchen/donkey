import IItem from "./item";
/**
 * button
 */
export default interface IButton extends IItem {
  tag?: "button";
  text?: string;
  attr?: {
    disabled?: boolean;
    title?: string,
    type?: "submit" | "reset" | "button",
    permission?: string;
    style?: string | object,
    className?: string
  },
  onClick?: (e: Event) => void;
}
