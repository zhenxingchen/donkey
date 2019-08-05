import IAjax from "./ajax";
import ILink from "./link";
import IButton from "./button";
import ICheckbox from "./checkbox";
import IInput from "./input";
import IItem from "./item";
import IRadio from "./radio";
import ISelect from "./select";
import ISelects from "./selects";
import ISpan from "./span";

declare type IGroupItem = ILink | IButton | ICheckbox | IInput | IRadio | ISelect | ISelects | ISpan;

export default interface IGroup extends IItem{
  tag?: "group";
  attr?: {
    style?: string | {};
    className?: string;
  },
  items: IGroupItem[];
  permissionAjax?: string | IAjax
}
