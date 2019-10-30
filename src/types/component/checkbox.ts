import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";

interface ICheckbox extends ILayout, IFormItem {
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
export default ICheckbox;
