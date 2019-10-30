import ILayout from "@types-common/layout";
import ITab from "@types-component/tab";

interface ITabs extends ILayout {
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

export default ITabs;
