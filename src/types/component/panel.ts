import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IPanel extends ILayout {
  tag: "panel";
  attr?: {
    id?: string;
    title?: string;
    visible?: boolean;
  };
  items?: IItem[];
}

export default IPanel;
