import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ISpan extends IComponent, IFormItem, ILayout {
  tag: "span";
  text?: string;
  items?: IItem[];
  onClick?: (target: HTMLSpanElement) => void;
}

export default ISpan;
