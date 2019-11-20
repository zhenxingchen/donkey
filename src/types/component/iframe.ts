import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface IIFrame extends IComponent, ILayout {
  tag: "iframe";
  name?: string;
  src?: string;
  width?: string;
  height?: string;
  border?: boolean;
  scrolling?: boolean;
  onLoad?: () => void;
}

export default IIFrame;
