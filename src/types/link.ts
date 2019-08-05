import IItem from "./item";

/**
 * link
 */
export default interface ILink extends IItem {
  tag?: "a";
  text: string;
  attr?: {
    id?: string,
    href?: string,
    target?: string,
    style?: {},
    className?: string
  };
  onClick?: (e: Event) => boolean | void;
}
