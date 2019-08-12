import IAjax from "./ajax";
import IBlock from "./block";
import IItems from "./items";

export default interface IForm {
  tag?: "form";
  cols?: string | string[];
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
  items: IItems[];
}