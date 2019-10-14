import ILayout from "../common/layout";
import IValidate from "../common/validte";
import { IFormItem } from "./form";

/**
 * 日期
 */
export default interface IDate extends ILayout, IFormItem {
  tag?: "date";
  attr?: {
    id?: string;
    name?: string;
    value?: string | number | Date;
    readonly?: boolean;
    disabled?: boolean;
    type?: "date" | "time" | "week" | "date-time" | "date-range" | "time-range" | "week-range" | "date-time-range";
    forbidden?: string | string[] | Date | Date[] | number | number[];
    format?: string;
    max?: Date | string | number;
    min?: Date | string | number;
  };
  onBlur?: (target: HTMLInputElement) => boolean | void;
  onChange?: (target: HTMLInputElement) => boolean | void;
  onFocus?: (target: HTMLInputElement) => boolean | void;
  validate?: IValidate;
}
