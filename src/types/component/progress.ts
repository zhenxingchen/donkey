import ILayout from "@types-common/layout";
import { IFormItem } from "./form";

/**
 * 进度条
 */
export default interface IProgress extends ILayout, IFormItem {
  tag: "progress";
  attr?: {
    id?: string;
    name?: string;
    visible?: boolean;
  };
}