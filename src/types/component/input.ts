import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

export type IInputType = "text" | "password" | "email" | "number";

interface IInput extends IComponent, IFormItem, ILayout {
  tag: "input";
  name?: string;
  type?: IInputType;
  maxLength?: number;
  autoComplete?: boolean;
  showClear?: boolean;
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  form?: {};
  table?: {};
}

export default IInput;
