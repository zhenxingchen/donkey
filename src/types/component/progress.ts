import { IFormItem } from "./form";
import ILayout from "@types-common/layout";

interface IProgress extends ILayout, IFormItem {
  tag: "progress";
  attr?: {
    id?: string;
    name?: string;
    visible?: boolean;
  };
}

export default IProgress;
