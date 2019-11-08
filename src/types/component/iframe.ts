import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface IIFrame extends IComponent, ILayout {
  tag: "iframe";
  name?: string;
  src?: string;
  onLoad?: () => void;
}

export default IIFrame;
