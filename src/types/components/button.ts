import ILayout from "../common/layout";
import { IFormItem } from "./form";

/**
 * 按钮
 */
export default interface IButton extends ILayout, IFormItem {
  tag?: "button";
  text?: string;
  attr?: {
    id?: string;
    title?: string;
    color?: "blue" | "red" | "gray" | "green" | "white";
    type?: "submit" | "reset" | "button";
    permission?: string;
    disabled?: boolean;
  },
  onClick?: (target: HTMLButtonElement) => void | boolean;
}
