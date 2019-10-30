import ILayout from "@types-common/layout";

interface ILoading extends ILayout {
  tag: "loading";
  attr?: {
    id?: string;
    visible?: boolean;
  }
}

export default ILoading;
