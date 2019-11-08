import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";
import ITab from "@types-component/tab";

export type TabsPositionType =
  "top"
  | "left"
  | "right"
  | "bottom";

export type TabsAlignType =
  "left"
  | "center"
  | "right";

export default interface ITabs extends IComponent, ILayout {
  tag: "tabs";
  selected?: string;
  position?: TabsPositionType;
  align?: TabsAlignType;
  toolbar: IItem[] | IItem;
  items?: ITab[];
  onSwitch?: (from: ITab, to: ITab) => void | boolean;
}
