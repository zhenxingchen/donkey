import ILayout from "@types-common/layout";

interface ITooltip extends ILayout {
  tag: "tooltip";
  attr: {
    id?: string;
    visible?: boolean;
  }
}

export default ITooltip;
