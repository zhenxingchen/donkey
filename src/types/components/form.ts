import IAjax from "../common/ajax";
import IBlock from "./block";
import ICols from "../layout/cols";
import IItem from "./item";

export default interface IForm extends ICols {
  tag?: "form";
  attr?: {
    id?: string;
    name?: string;
    action?: string;
    method?: "get" | "GET" | "post" | "POST";
    load?: true;
    disabled?: boolean;
    className?: string;
    style?: {};
  };
  onSubmit?: (formData: object) => boolean | {};
  onSuccess?: (result: object) => void | {};
  onValidate?: (msg: string) => void;
  ajax?: IAjax;
  data?: {};
  block?: IBlock;
  items: IItem[];
}

export interface IFormControl {
  label?: string;
}