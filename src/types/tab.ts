import IItems from "./items";

export default interface ITab {
  tag?: "tab";
  cols?: string | string[];
  attr?: {
    id?: string;
    selected?: string;
    direction?: "top" | "left" | "right" | "bottom";
    align?: "left" | "center" | "right";
    className?: string;
    style?: {};
  };
  items?: IItems[];
  onSwitch?: (from: ITab, to: ITab) => void | boolean;
}
