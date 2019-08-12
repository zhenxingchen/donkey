import IAjax from "./ajax";
export default interface ITree {
  tag?: "tree";
  cols?: string | string[];
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  data: {}[];
}