import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";

interface ITransfer extends ILayout, IFormItem {
  tag: "transfer";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  onChange?: (from, to) => boolean;
}

export default ITransfer;
