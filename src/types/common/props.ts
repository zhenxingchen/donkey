
export default interface IProps<T> {
  // portal or render mount
  target?: HTMLElement;
  // for portal or render to get parent position
  parent?: any;
  // container component
  children?: any;
  // for items
  configs?: T[];
  // config
  config?: T;
  // list
  key?: string | number;
  // table row index
  rowIndex?: number;
  // table col index
  colIndex?: number;
}
