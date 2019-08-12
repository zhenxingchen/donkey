import IItems from "./items";
export default interface IBlock {
  tag?: "block";
  cols?: string | string[];
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  items?: IItems[]
}
