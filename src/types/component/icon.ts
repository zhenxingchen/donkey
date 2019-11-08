import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface IIcon extends IComponent, IFormItem, ILayout {
  tag: "icon";
  name?: string;
  size?: string;
  color?: string;
  onClick?: (config: IIcon) => void;
}

export default IIcon;
