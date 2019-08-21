import ICols from "../layout/cols";
import IValidate from "../common/validte";
import { IFormControl } from "./form";
export default interface ITextArea extends ICols, IFormControl {
  tag?: "textarea";
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
