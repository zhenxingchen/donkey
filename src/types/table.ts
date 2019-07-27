
interface ITableHeader {
  text: string;
  colSpan?: number;
  rowSpan?: number;
}

interface ITableItems {
  text: string;
  name: string;
  align?: string;
  wrap?: boolean;
  format?: (value: any, rowData: string, rowIndex: number) => string | number | {};
}

export default interface ITable {

  tag: "table";

  attr?: {
    checkType?: string;
    checkField?: string;
    name?: string;
    dynamic?: boolean;
  },

  header?: ITableHeader[][];
  items: ITableItems[];

  data?: {}[],

  onCheck?: (rowData: {}, rowIndex: number) => void;
  unCheck?: (rowData: {}, rowIndex: number) => void;
  onCheckAll?: (rowData: {}[]) => void;
}