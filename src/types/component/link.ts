import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ILink extends IComponent, IFormItem, ILayout {
  tag: "link";
  text?: string;
  href?: string;
  target?: string;
  onClick?: (target: HTMLLinkElement) => boolean | void;
  items?: IItem[]
}

export default ILink;
