import ILayout from "../common/layout";
import IItem from "../components/item";

/**
 * 轮播
 */
export default interface ICarousel extends ILayout {
  tag: "carousel";
  attr?: {
    id?: string;
  };
  items?: IItem[];
  onChange?: (index: number) => void;
}