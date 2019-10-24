import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

export default interface ITab extends IFormItem, ILayout {
  tag: "tab";
  attr?: {
    id?: string;
    text?: string;
    disabled?: boolean;
  };
  items?: IItem[];
  onShow: (config: ITab) => void;
  onHide: (config: ITab) => void;
}