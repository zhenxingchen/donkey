import { IFormItem } from "./form";
import ILayout from "../common/layout";
/**
 * 穿梭框
 */
export default interface ITransfer extends ILayout, IFormItem {
  tag?: "transfer";
  attr?: {
    id?: string;
  };
  onChange?: (from, to) => boolean;
}