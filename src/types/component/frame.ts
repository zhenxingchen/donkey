import ILayout from "@types-common/layout";

interface IFrame extends ILayout {
  tag: "frame"
  attr?: {
    id?: string;
  }
}

export default IFrame;
