import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IButton extends ILayout, IFormItem {
  tag: "button";
  text?: string;
  attr?: {
    id?: string;
    title?: string;
    color?: "blue" | "red" | "gray" | "green" | "white";
    type?: "submit" | "reset" | "button";
    permission?: string;
    disabled?: boolean;
    visible?: boolean;
  },
  onClick?: (target: HTMLButtonElement) => void | boolean;
  items?: IItem[];
}

export default IButton;
