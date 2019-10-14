import ILayout from "../common/layout";
import ILink from "./link";
import ISpan from "./span";

/**
 * 面包屑
 */
export default interface IBread extends ILayout {
  tag: "bread";
  attr?: {
    id?: string;
    split?: string;
  },
  items: (ILink | ISpan)[]
}
