import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface IMenu extends IComponent, ILayout {
  tag?: "menu";
  textField?: string;
  hrefField?: string;
  iconField?: string;
  childrenField?: string;
  offset?: number
  data?: {}[];
  ajax?: IAjax;
}

export default IMenu;
