import ILayout from "@types-common/layout";
import { IFormItem } from "./form";

export default interface IIcon extends ILayout, IFormItem {
  tag: "icon";
  attr?: {
    id?: string;
    name?: string;
    src?: string;
    width?: number;
    height?: number;
  };
  onClick?: (config: IIcon) => void;
}