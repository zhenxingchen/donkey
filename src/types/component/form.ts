import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IForm extends IComponent, ILayout {
  tag: "form";
  name?: string;
  action?: string;
  method?: string;
  load?: true;
  disabled?: boolean;
  ajax?: IAjax;
  data?: {};
  items: IItem[];
  onSubmit?: (formData: object) => boolean | {};
  onSuccess?: (result: object) => void | {};
  onValidate?: (msg: string) => void;
}

export default IForm;
