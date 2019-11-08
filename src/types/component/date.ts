import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

export type IDateType =
  "date"
  | "time"
  | "week"
  | "dateTime"
  | "dateRange"
  | "timeRange"
  | "weekRange"
  | "dateTimeRange";

export type IDateForbidden =
  string
  | string[]
  | Date
  | Date[]
  | number
  | number[];

interface IDate extends IComponent, IFormItem, ILayout {
  tag: "date";
  name?: string;
  value?: string | number | Date;
  type?: IDateType;
  forbidden?: IDateForbidden;
  format?: string;
  max?: Date | string | number;
  min?: Date | string | number;
  onBlur?: (target: HTMLInputElement) => boolean | void;
  onChange?: (target: HTMLInputElement) => boolean | void;
  onFocus?: (target: HTMLInputElement) => boolean | void;
}

export default IDate;
