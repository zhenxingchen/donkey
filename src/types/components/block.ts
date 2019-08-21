import ICols from "../layout/cols";
import IItem from "./item";
export default interface IBlock extends ICols {
  tag?: "block";
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  items?: IItem[]
}
