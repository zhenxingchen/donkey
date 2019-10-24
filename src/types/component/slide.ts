import ILayout from "@types-common/layout";
import { IFormItem } from "./form";

/**
 * 滑杆选择器
 */
export default interface ISlide extends ILayout, IFormItem {
  tag: "slide";
  attr?: {
    id?: string;
    visible?: boolean;
  };
}