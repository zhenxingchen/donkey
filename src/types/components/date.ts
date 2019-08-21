import ICols from "../layout/cols";
import IValidate from "../common/validte";
import { IFormControl } from "./form";
export default interface IDate extends ICols, IFormControl {
  tag?: "date";
  attr?: {
    id?: string;
    name?: string;
    value?: string | number | Date;
    readonly?: boolean;
    disabled?: boolean;
    className?: string;
    style?: {};
  };
  config?: {
    type?: "date" | "time" | "week" | "date-time" | "date-range" | "time-range" | "week-range" | "date-time-range";
    format?: string;
    max?: Date | string | number;
    min?: Date | string | number;
    disabled?: string | string[] | Date | Date[] | number | number[];
  };
  onBlur?: (target: HTMLInputElement) => boolean | void;
  onChange?: (target: HTMLInputElement) => boolean | void;
  onFocus?: (target: HTMLInputElement) => boolean | void;
  validate?: IValidate;
}
