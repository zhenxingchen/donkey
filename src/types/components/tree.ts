import { IFormItem } from "./form";
import IAjax from "../common/ajax";
import ILayout from "../common/layout";

/**
 * 树
 */
export default interface ITree extends ILayout, IFormItem {
  tag?: "tree";
  attr?: {
    id?: string;
    name?: string;
    value?: string | string[];
    type?: "checkbox" | "radio";
    association?: ""
  };
  ajax?: IAjax;
  data: {}[];
}