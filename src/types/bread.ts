import ILink from "./link";
import ISpan from "./span";

export default interface IBread {
  tag: "bread";
  cols?: string | string[];
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  },
  items: (ILink | ISpan)[]
}
