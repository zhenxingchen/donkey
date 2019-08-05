import Item from "./item";

export default interface ICheckbox extends Item{
  tag?: "checkbox",
  attr?: {
    id?: string;
    name?: string;
    text?: string;
    value?: string | boolean | number;
    disabled?: boolean;
    readonly?: boolean;
    style?: object;
    className?: string
  },
  onClick?: (e: Event) => boolean;
}