/**
 * link
 */
export default interface ILink {
  tag?: "link";
  cols?: string | string[];
  label?: string;
  text?: string;
  attr?: {
    id?: string;
    href?: string;
    target?: string;
    className?: string;
    style?: {};
  };
  onClick?: (target: HTMLLinkElement) => boolean | void;
}
