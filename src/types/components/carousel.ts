import ICols from "../layout/cols";
import IItem from "../components/item";
export default interface ICarousel extends ICols {
  tag: "carousel";
  attr?: {
    className?: string;
    style?: {};
  };
  items?: IItem[];
  onChange?: (index: number) => void;
}