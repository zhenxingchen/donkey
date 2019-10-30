import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface ICarousel extends ILayout {
  tag: "carousel";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[];
  onChange?: (index: number) => void;
}

export default ICarousel;
