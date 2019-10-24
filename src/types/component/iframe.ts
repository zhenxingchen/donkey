import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * iframe
 */
export default interface IIFrame extends ILayout, IFormItem {
  tag: "iframe";
  attr?: {
    id?: string;
    name?: string;
    src?: string;
    visible?: boolean;
  };
  onLoad?: () => void;
}