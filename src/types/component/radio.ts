import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * 单选框
 */
export default interface IRadio extends ILayout, IFormItem {
  tag: "radio";
  attr?: {
    id?: string;
    name?: string;
    nameAlias?: string;
    text?: string | boolean | number;
    value?: any;
    disabled?: boolean;
    visible?: boolean;
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}
