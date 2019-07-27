import IValidate from "./validte";

import { IFormItemsLayout } from "./form";

export default interface IInput extends IFormItemsLayout {
  tag: "input";

  attr?: {
    id?: string;
    name: string;
    type?: "text" | "password" | "email" | "number";
    value?: string;
    placeholder?: string;
    maxLength?: number;

    disabled?: boolean;
    readonly?: boolean;
    clear?: boolean;

    style?: object;
    className?: string
  };

  validate?: IValidate;

  onChange?: (e: Event) => void | boolean;
}
