export default interface IProps<T> {
  // for config
  config?: T;
  // for config items
  configs?: T[];
  // for list
  key?: string | number;
  // for table row index
  rowIndex?: number;
  // for table col index
  colIndex?: number;
}
