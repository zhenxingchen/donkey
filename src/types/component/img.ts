import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
/**
 * 图片
 */
export default interface IImg extends ILayout,IFormItem {
  tag: "img";
  attr?: {
    id?: string;
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    visible?: boolean;
  };
  onLoad?: () => void;
  onClose?: () => void;
}