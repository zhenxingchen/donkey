/**
 * button
 */
export default interface IButton {
  tag?: "button";
  cols?: string | string[];
  text?: string;
  attr?: {
    id?: string;
    title?: string;
    type?: "submit" | "reset" | "button";
    permission?: string;
    disabled?: boolean;
    className?: string;
    style?: {};
  },
  onClick?: (target: HTMLButtonElement) => void | boolean;
}
