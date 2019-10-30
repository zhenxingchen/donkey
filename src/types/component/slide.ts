import { IFormItem } from "./form";
import ILayout from "@types-common/layout";

interface ISlide extends ILayout, IFormItem {
  tag: "slide";
  attr?: {
    id?: string;
    visible?: boolean;
  };
}

export default ISlide;
