import ILayout from "../common/layout";
import IItem from "./item";

/**
 * 面板
 */
export default interface IPanel extends ILayout {
  tag?: "panel";
  attr?: {
    id?: string;
    title?: string;
  };
  items?: IItem[];
}