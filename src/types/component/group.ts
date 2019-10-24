import IAjax from "@types-common/ajax";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";
import IValidate from "@types-common/validte";
import { IFormItem } from "@types-component/form";

/**
 * 组
 */
export default interface IGroup extends ILayout, IFormItem {
  tag: "group";
  attr?: {
    id?: string;
    name?: string;
    visible?: boolean;
  },
  items: IItem[];
  permissionAjax?: string | IAjax
  validate?: IValidate;
}
