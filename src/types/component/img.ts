import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IImg extends IComponent, IFormItem, ILayout {
  tag: "img";
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  onLoad?: () => void;
  onClose?: () => void;
}

export default IImg;
