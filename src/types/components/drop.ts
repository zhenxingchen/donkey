import ICols from "../layout/cols";
import IItem from "./item";
export default interface IDrop extends ICols {
  tag?: "drop";
  attr?: {
    trigger?: "hover" | "click";
    position?: "top" | "left" | "bottom" | "right";
    show?: boolean;
  };
  items: IItem[];
}