import ILink from "./link";
import ISpan from "./span";

export default interface IBread {
  tag: "bread";
  attr?: {
    style?: {},
    className?: string
  },
  items: (ILink | ISpan)[]
}
