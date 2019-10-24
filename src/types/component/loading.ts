/**
 * 加载中
 */
export default interface ILoading {
  tag: "loading";
  attr?: {
    id?: string;
    visible?: boolean;
  }
}