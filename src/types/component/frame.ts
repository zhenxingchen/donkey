import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface IFrame extends IComponent, ILayout {
  tag: "frame";
  name?: string;
}

export default IFrame;
