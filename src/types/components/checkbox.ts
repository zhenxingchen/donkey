import ILayout from "../common/layout";

/**
 * 复选框
 */
export default interface ICheckbox extends ILayout {
  tag?: "checkbox";
  attr?: {
    id?: string;
    name?: string;
    nameAlias?: string;
    text?: string;
    value?: string | number | string[];
    disabled?: boolean;
    readonly?: boolean;
  },
  onClick?: (target: HTMLInputElement) => boolean;
}