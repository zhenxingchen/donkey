import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ITimeLine extends IComponent, ILayout {
  tag: "timeline",
  direction: "x" | "y";
  items?: IItem[];
  animated?: boolean;
}

export default ITimeLine;
