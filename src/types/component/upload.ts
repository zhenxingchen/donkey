import { IFormItem } from "./form";
import IAjax from "@types-common/ajax";
import IItem from "./item";
import ILayout from "@types-common/layout";
import IValidate from "@types-common/validte";

interface IUpload extends ILayout, IFormItem {
  tag?: "upload";
  text: string;
  attr?: {
    id?: string;
    name?: string;
    fileTypes?: string;
    maxSize?: number;
    multipleSize?: number;
    serial?: boolean;
    permission?: string;
    disabled?: boolean;
    visible?: boolean;
  };
  ajax?: IAjax;
  validate?: IValidate;
  onValidate: (msg: string) => void;
  items?: IItem[]
}

export default IUpload;
