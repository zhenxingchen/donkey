import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IPanel extends IComponent, ILayout {
  tag: "panel";
  title?: string;
  items?: IItem[];
}

export default IPanel;
