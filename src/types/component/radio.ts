import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";

interface IRadio extends ILayout, IFormItem {
  tag: "radio";
  attr?: {
    id?: string;
    name?: string;
    nameAlias?: string;
    text?: string | boolean | number;
    value?: any;
    disabled?: boolean;
    visible?: boolean;
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}

export default IRadio;
