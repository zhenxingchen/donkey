import ILayout from "@types-common/layout";

interface IToast extends ILayout {
  tag: "toast";
  attr?: {
    id?: string;
    text?: string;
    delay?: number;
    icon?: string;
    theme?: "white" | "dark";
    type?: "error" | "success" | "warn" | "info";
  };
}

export default IToast;
