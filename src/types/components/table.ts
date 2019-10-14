import IAjax from "../common/ajax";
import ILayout from "../common/layout";
import IItem from "./item";
import IPager from "./pager";

/**
 * 表格
 */
export default interface ITable extends ILayout {
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
  data?: [];
  ajax?: IAjax;
  onCheck?: (rowData: {}, rowIndex: number) => void;
  unCheck?: (rowData: {}, rowIndex: number) => void;
  onCheckAll?: (rowData: {}[]) => void;
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
