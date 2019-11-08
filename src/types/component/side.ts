import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

type ISidePosition =
  "top"
  | "right"
  | "bottom"
  | "left"
  | { top?: string, left?: string; right?: string ; bottom?: string };

interface ISide extends IComponent, ILayout {
  tag: "side";
  title?: string;
  position?: ISidePosition;
  width?: string;
  showMask?: boolean;
  showClose?: boolean;
  maskClose?: boolean;
  escClose?: boolean;
  body: IItem[] | IItem;
  header?: IItem[] | IItem;
  footer?: IItem[] | IItem;
}

export default ISide;
