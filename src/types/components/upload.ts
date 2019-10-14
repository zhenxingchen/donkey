import IAjax from "../common/ajax";
import ILayout from "../common/layout";
import IValidate from "../common/validte";
import { IFormItem } from "./form";

/**
 * 文件上传
 */
export default interface IUpload extends ILayout, IFormItem {
  tag?: "upload";
  text: string;
  attr?: {
    id?: string;
    name?: string;
    type?: "text" | "button";
    color?: "blue" | "red" | "gray" | "green" | "white";
    fileTypes?: string;
    maxSize?: number;
    multipleSize?: number;
    serial?: boolean;
    permission?: string;
    disabled?: boolean;
  };
  ajax?: IAjax;
  validate?: IValidate;
  onValidate: (msg: string) => void;
}