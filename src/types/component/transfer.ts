import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
/**
 * 穿梭框
 */
export default interface ITransfer extends ILayout, IFormItem {
  tag: "transfer";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  onChange?: (from, to) => boolean;
}