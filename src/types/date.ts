import IValidate from "./validte";

export default interface IDate {
  tag?: "date";
  cols?: string | string[];
  label?: string;
  attr?: {
    id?: string;
    name?: string;
    value?: string | number | Date;
    readonly?: boolean;
    disabled?: boolean;
    className?: string;
    style?: {};
  }
  onBlur?: (target: HTMLInputElement) => boolean | void;
  onChange?: (target: HTMLInputElement) => boolean | void;
  onFocus?: (target: HTMLInputElement) => boolean | void;
  validate?: IValidate;
}
