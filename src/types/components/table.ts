import IAjax from "../common/ajax";
import ICols from "../layout/cols";
import IItem from "./item";
import IPager from "./pager";

export default interface ITable extends ICols {
  tag?: "table";
  attr?: {
    id?: string;
    name?: string;
    checkType?: "checkbox" | "radio";
    checkField?: string | string[];
    disabled?: boolean;
    fixed?: boolean;
    border?: boolean;
    zebra?: boolean;
    className?: string;
    style?: {};
  };
  toolbar?: IItem;
  columns: ITableColumns[];
  header?: ITableHeader[] | ITableHeader[][];
  format?: {
    [key: string]: (value: any, rowData: object, rowIndex: number) =>
      IItem | boolean | string | number | null | Date;
  };
  pager?: IPager;
  children?: ITable;
  onCheck?: (rowData: {}, rowIndex: number) => void;
  unCheck?: (rowData: {}, rowIndex: number) => void;
  onCheckAll?: (rowData: {}[]) => void;
  data?: [];
  ajax?: IAjax;
}

interface ITableHeader {
  text: string;
  colSpan?: number;
  rowSpan?: number;
  style?: {};
  className?: string;
}

interface ITableColumns {
  align?: "left" | "center" | "right";
  fixed?: "left" | "right";
  name: string;
  text: string;
  width?: string;
  dateFormat?: string;
  wrap?: boolean;
  sort?: boolean;
  style?: {};
  className?: string;
}
