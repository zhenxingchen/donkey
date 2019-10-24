/**
 * 吐司
 */
export default interface IToast {
  tag: "toast";
  attr?: {
    id?: string;
    visible?: boolean;
  }
}