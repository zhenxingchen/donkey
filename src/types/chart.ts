import IItem from "./item";
export default interface IChart extends IItem {
  tag?: "chart";
  attr?: {
    id?: string;
    style?: {};
    className?: string
  }
}