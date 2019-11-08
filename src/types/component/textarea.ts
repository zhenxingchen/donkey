import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ITextArea extends IComponent, IFormItem, ILayout {
  tag: "textarea";
  name?: string;
  value?: string;
  maxLength?: number;
  width?: string;
  height?: string;
  onBlur?: (target: HTMLInputElement) => void | boolean;
  onFocus?: (target: HTMLInputElement) => void | boolean;
  onChange?: (target: HTMLInputElement) => void | boolean;
  onInput?: (target: HTMLInputElement) => void | boolean;
}

export default ITextArea;
