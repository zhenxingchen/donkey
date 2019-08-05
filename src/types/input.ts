import IValidate from "./validte";
import IItem from "./item";

export default interface IInput extends IItem {
  tag?: "input";
  attr?: {
    id?: string;
    name: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    readonly?: boolean;
    clear?: boolean;
    autoComplete?: "off" | "on";
    style?: object;
    className?: string
  };
  onBlur?: (e: Event) => void | boolean;
  onChange?: (e: Event) => void | boolean;
  onFocus?: (e: Event) => void | boolean;
  validate?: IValidate;
}
