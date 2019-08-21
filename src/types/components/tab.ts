import ICols from "../layout/cols";
import IItem from "./item";
export default interface ITab extends ICols {
  tag?: "tab";
  attr?: {
    id?: string;
    selected?: string;
    direction?: "top" | "left" | "right" | "bottom";
    align?: "left" | "center" | "right";
    className?: string;
    style?: {};
  };
  items?: IItem[];
  onSwitch?: (from: ITab, to: ITab) => void | boolean;
}
