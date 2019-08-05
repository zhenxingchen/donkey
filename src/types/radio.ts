import IItem from "./item";
export default interface IRadio extends IItem {
  tag?: "radio";
  attr?: {
    id?: string;
    name?: string;
    value?: any;
    disabled?: boolean;
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}
