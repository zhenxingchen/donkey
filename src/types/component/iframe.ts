import ILayout from "@types-common/layout";

interface IIFrame extends ILayout {
  tag: "iframe";
  attr?: {
    id?: string;
    name?: string;
    src?: string;
    visible?: boolean;
  };
  onLoad?: () => void;
}

export default IIFrame;
