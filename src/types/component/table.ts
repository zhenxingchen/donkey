import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";
import IItem from "@types-component/item";
import IPager from "@types-component/pager";

interface ITable extends IComponent, ILayout {
  tag: "table";
  name?: string;
  checkType?: "checkbox" | "radio";
  checkField?: string | string[];
  disabled?: boolean;
  fixed?: boolean;
  border?: boolean;
  zebra?: boolean;
  toolbar?: IItem;
  columns: ITableColumns[];
  header?: ITableHeader[] | ITableHeader[][];
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
  format?: (value: any, rowData: object, rowIndex: number) =>
      IItem | boolean | string | number | null | Date;
}

export default ITable;