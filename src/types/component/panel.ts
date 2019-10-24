import ILayout from "@types-common/layout";
import IItem from "@types-component/item";
import { IFormItem } from "@types-component/form";
/**
 * 面板
 */
export default interface IPanel extends ILayout, IFormItem {
  tag: "panel";
  attr?: {
    id?: string;
    title?: string;
    visible?: boolean;
  };
  items?: IItem[];
}