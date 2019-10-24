import ILayout from "@types-common/layout";
import IItem from "@types-component/item";
import { IFormItem } from "@types-component/form";

/**
 * 轮播
 */
export default interface ICarousel extends ILayout, IFormItem {
  tag: "carousel";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[];
  onChange?: (index: number) => void;
}