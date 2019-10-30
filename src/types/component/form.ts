import IAjax from "@types-common/ajax";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IForm extends ILayout {
  tag: "form";
  attr?: {
    id?: string;
    name?: string;
    action?: string;
    method?: string;
    load?: true;
    disabled?: boolean;
    visible?: boolean;
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
}

export default IForm;
