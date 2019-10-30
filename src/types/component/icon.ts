import { IFormItem } from "./form";
import ILayout from "@types-common/layout";

interface IIcon extends ILayout, IFormItem {
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

export default IIcon;
