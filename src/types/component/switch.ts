import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
/**
 * 切换开关
 */
export default interface ISwitch extends ILayout, IFormItem {
  tag: "switch";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  onChange?: (from, to) => boolean;
}
