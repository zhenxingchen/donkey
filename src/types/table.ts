
export default interface ITable {
  tag: "table";
  attr?: {
    name?: string;
    checkType?: string;
    checkField?: string;
    dynamic?: boolean;
    style?: string | {};
    className?: string;
  },
  header?: ITableHeader[][];
  items: ITableItems[];
  data?: {}[],
  onCheck?: (rowData: {}, rowIndex: number) => void;
  unCheck?: (rowData: {}, rowIndex: number) => void;
  onCheckAll?: (rowData: {}[]) => void;
}

export interface ITableHeader {
  text: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface ITableItems {
  text: string;
  name: string;
  align?: "left" | "center" | "right";
  wrap?: boolean;
  format?: (value: any, rowData: string, rowIndex: number) => string | number | {};
}
