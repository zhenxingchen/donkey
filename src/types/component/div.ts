import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IDiv extends IComponent, ILayout {
  tag: "div";
  items?: IItem[]
}

export default IDiv;
