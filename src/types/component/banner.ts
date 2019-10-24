import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

/**
 * 导航栏
 */
export default interface IBanner extends IFormItem, ILayout {
  tag?: "banner";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[];
}
