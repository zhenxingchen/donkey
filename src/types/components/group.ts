import IAjax from "../common/ajax";
import ICols from "../layout/cols";
import IItem from "./item";
import IValidate from "../common/validte";
import { IFormControl } from "./form";
export default interface IGroup extends ICols, IFormControl {
  tag?: "group";
  attr?: {
    id?: string;
    name?: string;
    className?: string;
    style?: {};
  },
  items: IItem[];
  permissionAjax?: string | IAjax
  validate?: IValidate;
}
