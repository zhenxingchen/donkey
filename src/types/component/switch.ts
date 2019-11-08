import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ISwitch extends IComponent, IFormItem, ILayout {
  tag: "switch";
  name?: string;
  offText: string;
  offValue: string | number | boolean;
  onText: string;
  onValue: string | number | boolean;
  onChange?: (from, to) => boolean;
}

export default ISwitch;
