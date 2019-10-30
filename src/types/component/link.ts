import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ILink extends ILayout, IFormItem {
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

export default ILink;
