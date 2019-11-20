/**
 * layout custom
 */
interface ILayout {
  // response cols
  cols?: string;
  // for root
  rootClassName?: string;
  rootStyle?: {};
  // for container
  containerClassName?: string;
  containerStyle?: {};
  // for component
  componentClassName?: string;
  componentStyle?: {};
  // for label
  labelClassName?: string;
  labelStyle?: {};
  // space for component container
  itemsSpace?: number;
  itemsSpaceLeft?: number;
  itemsSpaceRight?: number;
}

export default ILayout;
