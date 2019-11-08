import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ITree extends IComponent, IFormItem, ILayout {
  tag: "tree";
  name?: string;
  value?: string | string[];
  type?: "checkbox" | "radio";
  association?: "";
  ajax?: IAjax;
  data: {}[];
}

export default ITree;
