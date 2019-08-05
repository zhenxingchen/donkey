import IItem from "./item";
import IValidate from "./validte";

export default interface IDate extends IItem {
  tag?: "date";
  attr?: {
    id?: string;
    name?: string;
    value?: string | number | Date;
    readonly?: boolean;
    disabled?: boolean;
    style?: string | {};
    className?: string;
  }
  onBlur?: (e: Event) => boolean | void;
  onChange?: (e: Event) => boolean | void;
  onFocus?: (e: Event) => boolean | void;
  validate?: IValidate;
}
