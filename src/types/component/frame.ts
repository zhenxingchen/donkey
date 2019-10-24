import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
/**
 * 导航框架
 */
export default interface IFrame extends IFormItem, ILayout {
  tag: "frame"
  attr?: {
    id?: string;
  }
}