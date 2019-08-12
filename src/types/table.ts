import IItems from "./items";
import IPager from "./pager";

export default interface ITable {
  tag?: "table";
  cols?: string | string[];
  attr?: {
    id?: string;
    name?: string;
    checkType?: string;
    checkField?: string;
    dynamic?: boolean;
    disabled?: boolean;
    fixed?: boolean;
    className?: string;
    style?: {};
  },
  header?: ITableHeader[] | ITableHeader[][];
  items: ITableItems[] | ITableItems[][];
  format?: {
    [key: string]: (value: any, rowData: object, rowIndex: number) =>
      IItems | boolean | string | number | null;
  };
  pager?: IPager;
  onCheck?: (rowData: {}, rowIndex: number) => void;
  unCheck?: (rowData: {}, rowIndex: number) => void;
  onCheckAll?: (rowData: {}[]) => void;
  data?: {}[],
}

export interface ITableHeader {
  text: string;
  colSpan?: number;
  rowSpan?: number;
  style?: {};
  className?: string;
}

export interface ITableItems {
  align?: "left" | "center" | "right";
  fixed?: "left" | "right";
  name: string;
  text: string;
  width?: string;
  wrap?: boolean;
  style?: {};
  className?: string;
}
