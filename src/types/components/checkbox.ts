import ICols from "../layout/cols";
export default interface ICheckbox extends ICols {
  tag?: "checkbox";
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