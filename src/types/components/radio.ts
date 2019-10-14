import ILayout from "../common/layout";

/**
 * 单选框
 */
export default interface IRadio extends ILayout {
  tag?: "radio";
  attr?: {
    id?: string;
    name?: string;
    nameAlias?: string;
    text?: string | boolean | number;
    value?: any;
    disabled?: boolean;
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}
