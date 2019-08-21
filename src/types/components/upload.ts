import IAjax from "../common/ajax";
import ICols from "../layout/cols";
import IValidate from "../common/validte";
import { IFormControl } from "./form";
export default interface IUpload extends ICols, IFormControl {
  tag?: "upload";
  attr?: {
    id?: string;
    className?: string;
    style?: {};
  };
  ajax?: IAjax;
  validate?: IValidate;
}