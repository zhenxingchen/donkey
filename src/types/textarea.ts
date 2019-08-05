import IItem from "./item";
import IValidate from "./validte";

/**
 * textarea
 */
export default interface ITextArea extends IItem {
  tag: "textarea";
  attr?: {
    id?: string;
    name?: string;
    value?: string;
    cols?: number;
    rows?: number;
    style?: string | {};
    className?: string;
  }
  onBlur?: (e: Event) => void | boolean;
  onFocus?: (e: Event) => void | boolean;
  onChange?: (e: Event) => void | boolean;
  onInput?: (e: Event) => void | boolean;
  validate?: IValidate;
}
