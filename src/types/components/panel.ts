import ICols from "../layout/cols";
import IItem from "./item";
export default interface IPanel extends ICols {
  tag?: "panel";
  attr?: {
    id?: string;
    title?: string;
    className?: string;
    style?: {};
  };
  items?: IItem[];
}