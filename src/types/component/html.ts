import { IFormItem } from "@types-component/form";
import ILayout from "@types-common/layout";

interface IHtml extends ILayout, IFormItem {
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

export default IHtml;
