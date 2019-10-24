import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * 原生 html
 */
export default interface IHtml extends ILayout, IFormItem {
  tag: "html";
  attr?: {
    id?: string;
    scriptUrl?: string | [];
    styleUrl?: string | [];
    visible?: boolean;
  };
  onLoad?: () => void;
  onError?: () => void;
}