import ILayout from "@types-common/layout";
import IItem from "@types-component/item";
import { IFormItem } from "@types-component/form";

/**
 * 块
 */
export default interface IBlock extends ILayout, IFormItem {
  tag: "block";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[]
}