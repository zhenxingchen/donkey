import { IFormItem } from "./form";
import ILayout from "../common/layout";
/**
 * 切换开关
 */
export default interface ISwitch extends ILayout, IFormItem {
  tag: "switch";
  attr?: {
    id?: string;
  };
  onChange?: (from, to) => boolean;
}
