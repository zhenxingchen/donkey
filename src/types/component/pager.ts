import IComponent from "@types-common/component";
import ILayout from "@types-common/layout";

interface Pager extends IComponent, ILayout {
  tag: "pager",
  page?: number;
  rows?: number;
  total?: number;
  jump?: boolean;
  rowsOption?: number[];
  statistic: (page: number, rows: number, total: number) => string;
  onPageChange: (pageCurr: number, pageTo: number) => void | boolean;
  onRowsChange: (rowCurr: number, rowsTo: number) => void | boolean;
}

export default Pager;
