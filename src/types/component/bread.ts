import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IBread extends IComponent, ILayout {
  tag: "bread";
  id?: string;
  split?: string;
  visible?: boolean;
  items?: IItem[];
  ajax?: IAjax;
}

export default IBread;
