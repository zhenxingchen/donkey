import { IFormItem } from "@types-component/form";
import IAjax from "@types-common/ajax";
import ILayout from "@types-common/layout";

/**
 * 目录
 */
export default interface IMenu extends IFormItem, ILayout {
  tag?: "menu";
  attr?: {
    id?: string;
    visible?: boolean;
    textField?: string;
    hrefField?: string;
    iconField?: string;
    childrenField?: string;
    offset?: number
  };
  data?: {}[];
  ajax?: IAjax;
}
