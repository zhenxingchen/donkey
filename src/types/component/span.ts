import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ISpan extends ILayout, IFormItem {
  tag: "span";
  text?: string;
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[];
  onClick?: (target: HTMLSpanElement) => void;
}

export default ISpan;
