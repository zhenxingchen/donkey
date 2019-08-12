import IAjax from "./ajax";
import IValidate from "./validte";

export default interface IUpload {
  tag?: "upload";
  cols?: string | string[];
  label?: string;
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  ajax?: IAjax;
  validate?: IValidate;
}