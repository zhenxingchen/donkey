import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

export type IButtonType = "submit" | "reset" | "button";

export type IButtonColor = "blue" | "red" | "gray" | "green" | "white";

interface IButton extends IComponent, IFormItem, ILayout {
  tag: "button";
  text?: string;
  color?: IButtonColor;
  type?: IButtonType;
  permission?: string;
  items?: IItem[];
  onClick?: (target: HTMLButtonElement) => void | boolean;
}

export default IButton;
