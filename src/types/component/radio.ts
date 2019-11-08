import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IRadio extends IComponent, IFormItem, ILayout {
  tag: "radio";
  name?: string;
  nameAlias?: string;
  text?: string | boolean | number;
  value?: string | number | boolean;
  onChange?: (target: HTMLInputElement) => boolean | void;
}

export default IRadio;
