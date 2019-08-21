import ICols from "../layout/cols";
import { IFormControl } from "./form";
export default interface IButton extends ICols, IFormControl {
  tag?: "button";
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
