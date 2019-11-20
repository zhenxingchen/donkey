import IValidate from "@types-common/validate";

export type IFormValue =
  string
  | number
  | boolean
  | Date
  | string[]
  | number[]
  | boolean[]
  | Date[];

export default interface IFormItem {
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  value?: IFormValue;
  validate?: IValidate;
}
