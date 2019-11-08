import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

interface ISlide extends IComponent, IFormItem, ILayout {
  tag: "slide";
}

export default ISlide;
