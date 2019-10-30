import IAjax from "@types-common/ajax";
import ILayout from "@types-common/layout";

interface IMenu extends ILayout {
  tag?: "menu";
  attr?: {
    id?: string;
    visible?: boolean;
    textField?: string;
    hrefField?: string;
    iconField?: string;
    childrenField?: string;
    offset?: number
  };
  data?: {}[];
  ajax?: IAjax;
}

export default IMenu;
