import IAjax from "./ajax";
import IItems from "./items";
import IValidate from "./validte";

export default interface IGroup {
  tag?: "group";
  cols?: string | string[];
  label?: string;
  attr?: {
    id?: string;
    name?: string;
    className?: string;
    style?: {};
  },
  items: IItems[];
  permissionAjax?: string | IAjax
  validate?: IValidate;
}
