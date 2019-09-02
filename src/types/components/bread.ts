import ICols from "../layout/cols";
import ILink from "./link";
import ISpan from "./span";
export default interface IBread extends ICols {
  tag: "bread";
  attr?: {
    id?: string;
    split?: "arrow" | "slash-left" | "slash-right"
    className?: string;
    style?: {};
  },
  items: (ILink | ISpan)[]
}
