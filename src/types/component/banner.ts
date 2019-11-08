import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface IBanner extends IComponent, ILayout {
  tag?: "banner";
  items?: IItem[];
}

export default IBanner;
