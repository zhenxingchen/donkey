import IAjax from "../common/ajax";
import IItem from "./item";
import ILayout from "../common/layout";

/**
 * 表单
 */
export default interface IForm extends ILayout {
  tag?: "form";
  attr?: {
    id?: string;
    name?: string;
    action?: string;
    method?: string;
    load?: true;
    disabled?: boolean;
  };
  onSubmit?: (formData: object) => boolean | {};
  onSuccess?: (result: object) => void | {};
  onValidate?: (msg: string) => void;
  ajax?: IAjax;
  data?: {};
  items: IItem[];
}

export interface IFormItem {
  label?: string;
  labelStyle?: {};

}