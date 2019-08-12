import IITems from "./items";
export default interface IPanel {
  tag?: "panel";
  cols?: string | string[];
  attr?: {
    id?: string;
    title?: string;
    className?: string;
    style?: {};
  };
  items?: IITems[];
}