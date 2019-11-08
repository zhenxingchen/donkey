import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface ITooltip extends IComponent, ILayout {
  tag: "tooltip";
}

export default ITooltip;
