import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
import IValidate from "@types-common/validte";

/**
 * 文本框
 */
export default interface IInput extends ILayout, IFormItem {
  tag: "input";
  attr?: {
    id?: string;
    name?: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    readonly?: boolean;
    autoComplete?: boolean;
    showClear?: boolean;
    visible?: boolean;
  };
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  validate?: IValidate;
  form?: {};
  table?: {};
}
