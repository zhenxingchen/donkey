import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * 复选框
 */
export default interface ICheckbox extends ILayout, IFormItem {
  tag: "checkbox";
  attr?: {
    id?: string;
    name?: string;
    nameAlias?: string;
    text?: string;
    value?: string | number | string[];
    disabled?: boolean;
    readonly?: boolean;
    visible?: boolean;
  };
  onClick?: (target: HTMLInputElement) => boolean;
}