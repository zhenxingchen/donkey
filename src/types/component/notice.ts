import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface INotice extends IComponent, ILayout {
  tag: "notice";
  items: IItem[];
}

export default INotice;
