import ILayout from "../common/layout";

/**
 * 原生 html
 */
export default interface IHtml extends ILayout {
  tag?: "html";
  attr?: {
    id?: string;
    scriptUrl?: string | [];
    styleUrl?: string | [];
  };
  onLoad?: () => void;
  onError?: () => void;
}