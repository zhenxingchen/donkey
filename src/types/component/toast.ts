import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

export type IToastType = "error" | "success" | "warn" | "info";

interface IToast extends IComponent, ILayout {
  tag: "toast";
  text?: string;
  delay?: number;
  icon?: string;
  theme?: "white" | "dark";
  type?: IToastType;
}

export default IToast;
