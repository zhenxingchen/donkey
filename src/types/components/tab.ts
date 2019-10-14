import ILayout from "../common/layout";
import IItem from "./item";

/**
 * 页签
 */
export default interface ITab extends ILayout {
  tag?: "tab";
  attr?: {
    id?: string;
    selected?: string;
    direction?: "top" | "left" | "right" | "bottom";
    align?: "left" | "center" | "right";
  };
  items?: IItem[];
  onSwitch?: (from: ITab, to: ITab) => void | boolean;
}
