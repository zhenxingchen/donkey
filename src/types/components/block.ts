import ILayout from "../common/layout";
import IItem from "./item";

/**
 * 块
 */
export default interface IBlock extends ILayout {
  tag?: "block";
  attr?: {
    id?: string;
  };
  items?: IItem[]
}