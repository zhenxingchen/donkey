import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IHtml extends ILayout, IFormItem {
  tag: "html";
  id?: string;
  scriptUrl?: string | [];
  styleUrl?: string | [];
  visible?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export default IHtml;
