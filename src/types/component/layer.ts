import ILayout from "@types-common/layout";

interface ILayer extends ILayout {
  tag: "layer";
  attr?: {
    id?: string;
    visible?: boolean;
  }
}

export default ILayer;
