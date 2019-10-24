import IAjax from "@types-common/ajax";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * 面包屑
 */
export default interface IBread extends ILayout, IFormItem {
  tag: "bread";
  attr?: {
    id?: string;
    split?: string;
    visible?: boolean;
  },
  items?: IItem[];
  ajax?: IAjax;
}
