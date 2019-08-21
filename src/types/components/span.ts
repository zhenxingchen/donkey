import ICols from "../layout/cols";
import { IFormControl } from "./form";
export default interface ISpan extends ICols, IFormControl {
  tag: "span";
  text?: string;
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  }
  onClick?: (target: HTMLSpanElement) => void;
}
