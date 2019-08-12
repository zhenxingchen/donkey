import IValidate from "./validte";
/**
 * textarea
 */
export default interface ITextArea {
  tag?: "textarea";
  cols?: string | string[];
  label?: string;
  attr?: {
    id?: string;
    name?: string;
    value?: string;
    cols?: number;
    rows?: number;
    maxLength?: number;
    disabled?: boolean;
    className?: string;
    style?: {};
  }
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onInput?: (target: HTMLInputElement) => void | boolean;
  validate?: IValidate;
}
