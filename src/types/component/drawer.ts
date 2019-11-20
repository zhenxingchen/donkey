import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

type IDrawerPosition =
  "top"
  | "right"
  | "bottom"
  | "left"
  | { top?: string, left?: string; right?: string ; bottom?: string };

interface IDrawer extends IComponent, ILayout {
  tag: "drawer";
  title?: string;
  position?: IDrawerPosition;
  width?: string;
  showMask?: boolean;
  showClose?: boolean;
  maskClose?: boolean;
  escClose?: boolean;
  items: IItem[] | IItem;
  header?: IItem[] | IItem;
  footer?: IItem[] | IItem;
}

export default IDrawer;
