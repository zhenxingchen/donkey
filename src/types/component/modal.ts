import IAnimation from "@types-common/animation";
import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

export type IModalPosition =
  "top"
  | "topLeft"
  | "topRight"
  | "center"
  | "centerLeft"
  | "centerRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | { top?: string, left?: string; right?: string ; bottom?: string };

export type IModalIcon =
  "success"
  | "error"
  | "warn"
  | "info"
  | string;

interface IModal extends IComponent, ILayout {
  tag: "modal";
  position?: IModalPosition;
  icon?: IModalIcon;
  title?: string;
  content?: string;
  width?: string;
  height?: string;
  animation?: IAnimation;
  showClose?: boolean;
  showMask?: boolean;
  maskClose?: boolean;
  escClose?: boolean;
  moveAble?: boolean;
  resizeAble?: boolean;
  body?: IItem[] | IItem;
  header?: IItem[] | IItem;
  footer?: IItem[] | IItem;
}

export default IModal;
