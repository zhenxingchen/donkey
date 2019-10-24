import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
/**
 * 超链接
 */
export default interface ILink extends ILayout, IFormItem {
  tag: "link";
  text?: string;
  attr?: {
    id?: string;
    href?: string;
    target?: string;
    visible?: boolean;
  };
  onClick?: (target: HTMLLinkElement) => boolean | void;
  items?: IItem[]
}
