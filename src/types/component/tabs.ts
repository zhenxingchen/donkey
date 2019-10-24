import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
import ITab from "@types-component/tab";

/**
 * 页签集合
 */
export default interface ITabs extends ILayout, IFormItem {
  tag: "tabs";
  attr?: {
    id?: string;
    selected?: string;
    direction?: "top" | "left" | "right" | "bottom";
    align?: "left" | "center" | "right";
    visible?: boolean;
  };
  items?: ITab[];
  onSwitch?: (from: ITab, to: ITab) => void | boolean;
}
