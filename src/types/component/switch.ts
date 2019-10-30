import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";

interface ISwitch extends ILayout, IFormItem {
  tag: "switch";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  onChange?: (from, to) => boolean;
}

export default ISwitch;
