/**
 * layout custom
 */
export default interface ILayout {
  // response cols
  cols?: string;
  layout?: {
    // for root
    rootClassName?: string;
    rootStyle?: {};
    // for container
    containerClassName?: string;
    containerStyle?: {};
    // for component
    componentClassName?: string;
    componentStyle?: {};
    // for other
    otherClassName?: string;
    otherStyle?: {};
  }
}