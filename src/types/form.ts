import IAjax from "./ajax";
import IButton from "./button";
import ICheckbox from "./checkbox";
import IGroup from "./group";
import IInput from "./input";
import ILink from "./link";
import IRadio from "./radio";
import ISelects from "./selects";
import ISelect from "./select";
import ITree from "./tree";

export declare type IFormItem =
  IButton | ICheckbox | IGroup |
  IInput | ILink | IRadio |
  ISelect | ISelects | ITree;

export default interface IForm {
  tag?: "form";
  attr?: {
    name: string;
    action: string;
    method?: "get" | "GET" | "post" | "POST";
    load?: true;
    disabled?: boolean;
    style?: string | object;
    className?: string;
  };
  items: IFormItem[];
  onSubmit?: (formData: object) => boolean | {};
  onSuccess?: (result: object) => void | {};
  onValidate?: (msg: string) => void;
  ajax?: IAjax;
  data?: {};
}