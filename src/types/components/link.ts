import ICols from "../layout/cols";
import { IFormControl } from "./form";
export default interface ILink extends ICols, IFormControl {
  tag?: "link";
  text?: string;
  attr?: {
    id?: string;
    href?: string;
    target?: string;
    className?: string;
    style?: {};
  };
  onClick?: (target: HTMLLinkElement) => boolean | void;
}
