import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IProgress extends IComponent, IFormItem, ILayout {
  tag: "progress";
  name?: string;
}

export default IProgress;
