import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface ICarousel extends IComponent, ILayout {
  tag: "carousel";
  items?: IItem[];
  onChange?: (index: number) => void;
}

export default ICarousel;
