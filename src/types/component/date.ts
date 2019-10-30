import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";
import IValidate from "@types-common/validte";

interface IDate extends ILayout, IFormItem {
  tag: "date";
  attr?: {
    id?: string;
    name?: string;
    value?: string | number | Date;
    readonly?: boolean;
    disabled?: boolean;
    visible?: boolean;
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

export default IDate;
