import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ICheckbox extends IComponent, IFormItem, ILayout {
  tag: "checkbox";
  name?: string;
  nameAlias?: string;
  text?: string;
  value?: string | number | string[];
  onClick?: (target: HTMLInputElement) => boolean;
}

export default ICheckbox;
