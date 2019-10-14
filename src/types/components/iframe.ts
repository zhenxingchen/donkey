import ILayout from "../common/layout";

/**
 * iframe
 */
export default interface IIFrame extends ILayout {
  tag?: "iframe";
  attr?: {
    id?: string;
    name?: string;
    src?: string;
  };
  onLoad?: () => void;
}