import IAjax from "./ajax";
import IALink from "./alink";
import IButton from "./button";
import ICheckbox from "./checkbox";
import IGroup from "./group";
import IInput from "./input";
import IRadio from "./radio";
import ISelect from "./select";
import ITree from "./tree";

export default interface IForm {
  tag: "form";
  attr: {
    name: string;
    action: string;
    method?: "get" | "GET" | "post" | "POST";
    load?: true;
    style?: string | object;
    className?: string;
  };
  items: (IALink | IButton | ICheckbox | IInput | IRadio | ISelect | ITree | IGroup) [];
  onSubmit?: (formData: object) => void | boolean;
  onSuccess?: (result: object) => void | object;
  onValidate?: (msg: string) => void;
  ajax?: IAjax;
  data?: {};
}

export interface IFormItemsLayout {
  label?: string;
  preText?: string;
  unitText?: string;
  colSpan?: string;
}
