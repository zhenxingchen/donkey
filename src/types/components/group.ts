import IAjax from "../common/ajax";
import ILayout from "../common/layout";
import IItem from "./item";
import IValidate from "../common/validte";
import { IFormItem } from "./form";

/**
 * 组
 */
export default interface IGroup extends ILayout, IFormItem {
  tag?: "group";
  attr?: {
    id?: string;
    name?: string;
  },
  items: IItem[];
  permissionAjax?: string | IAjax
  validate?: IValidate;
}
