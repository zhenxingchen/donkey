import IValidate from "./validte";

export default interface IInput {
  tag?: "input";
  cols?: string | string[];
  label?: string;
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
    className?: string;
    style?: {};
  };
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  validate?: IValidate;
  form?: {};
  table?: {};
}
