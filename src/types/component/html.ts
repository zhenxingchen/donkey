import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IHtml extends IComponent, IFormItem, ILayout {
  tag: "html";
  content?: string;
  resourceSrc?: string | [];
  onResourceLoad?: () => void;
  onResourceError?: () => void;
}

export default IHtml;
