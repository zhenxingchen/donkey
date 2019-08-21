import IAjax from "../common/ajax";
import ICols from "../layout/cols";
export default interface ITree extends ICols {
  tag?: "tree";
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  data: {}[];
}