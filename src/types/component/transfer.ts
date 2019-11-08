import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ITransfer extends IComponent, ILayout, IFormItem {
  tag: "transfer";
  onChange?: (from, to) => boolean;
}

export default ITransfer;
