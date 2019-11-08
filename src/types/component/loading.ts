import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface ILoading extends IComponent, ILayout {
  tag: "loading";
}

export default ILoading;
