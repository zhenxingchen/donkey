import ILayout from "../common/layout";
import { IFormItem } from "./form";

/**
 * 超链接
 */
export default interface ILink extends ILayout, IFormItem {
  tag?: "link";
  text?: string;
  attr?: {
    id?: string;
    href?: string;
    target?: string;
  };
  onClick?: (target: HTMLLinkElement) => boolean | void;
}
