import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
import IValidate from "@types-common/validte";

interface ITextArea extends ILayout, IFormItem {
  tag: "textarea";
  attr?: {
    id?: string;
    name?: string;
    value?: string;
    cols?: number;
    rows?: number;
    maxLength?: number;
    disabled?: boolean;
    visible?: boolean;
  }
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onInput?: (target: HTMLInputElement) => void | boolean;
  validate?: IValidate;
}

export default ITextArea;
