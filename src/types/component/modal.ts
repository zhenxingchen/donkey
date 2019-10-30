import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface IModal extends ILayout {
  tag: "modal";
  attr?: {
    id?: string;
    position?: "top" | "center" | "bottom";
    icon?: string;
    title?: string;
    content?: string;
    close?: boolean;
    mask?: boolean;
  };
  footer?: IItem[];
}

export default IModal;
