import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import IItem from "./item";
import ILayout from "@types-common/layout";

interface IUpload extends IComponent, IFormItem, ILayout {
  tag?: "upload";
  text: string;
  name?: string;
  fileTypes?: string;
  maxSize?: number;
  multipleSize?: number;
  serial?: boolean;
  permission?: string;
  ajax?: IAjax;
  onValidate: (msg: string) => void;
  items?: IItem[]
}

export default IUpload;
