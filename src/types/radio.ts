export default interface IRadio {
  tag?: "radio";
  cols?: string | string[];
  attr?: {
    id?: string;
    name?: string;
    text?: string | boolean | number;
    value?: any;
    disabled?: boolean;
    className?: string;
    style?: {};
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}
