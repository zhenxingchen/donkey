import { IFormItem } from "./form";
import IAjax from "@types-common/ajax";
import ILayout from "@types-common/layout";

interface ITree extends ILayout, IFormItem {
  tag: "tree";
  attr?: {
    id?: string;
    name?: string;
    value?: string | string[];
    type?: "checkbox" | "radio";
    association?: "";
    visible?: boolean;
  };
  ajax?: IAjax;
  data: {}[];
}

export default ITree;
