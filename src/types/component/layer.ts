import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface ILayer extends IComponent, ILayout {
  tag: "layer";
}

export default ILayer;
