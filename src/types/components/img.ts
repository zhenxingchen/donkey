import { IFormItem } from "./form";
import ILayout from "../common/layout";
/**
 * 图片
 */
export default interface IImg extends ILayout,IFormItem {
  tag?: "img";
  attr?: {
    id?: string;
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  };
  onLoad?: () => void;
  onClose?: () => void;
}