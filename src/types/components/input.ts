import ILayout from "../common/layout";
import IValidate from "../common/validte";
import { IFormItem } from "./form";

/**
 * 文本框
 */
export default interface IInput extends ILayout, IFormItem {
  tag?: "input";
  attr?: {
    id?: string;
    name?: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    readonly?: boolean;
    autoComplete?: "off" | "on";
    clear?: boolean;
  };
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  validate?: IValidate;
  form?: {};
  table?: {};
}
