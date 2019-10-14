import ILayout from "../common/layout";
import { IFormItem } from "./form";

/**
 * 文本
 */
export default interface ISpan extends ILayout, IFormItem {
  tag: "span";
  text?: string;
  attr?: {
    id?: string;
  }
  onClick?: (target: HTMLSpanElement) => void;
}
