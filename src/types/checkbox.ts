export default interface ICheckbox {
  tag?: "checkbox";
  cols?: string | string[];
  attr?: {
    id?: string;
    name?: string;
    text?: string;
    value?: string | number | string[];
    disabled?: boolean;
    readonly?: boolean;
    className?: string;
    style?: {};
  },
  onClick?: (target: HTMLInputElement) => boolean;
}