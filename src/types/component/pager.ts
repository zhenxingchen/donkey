import ILayout from "@types-common/layout";

interface Pager extends ILayout {
  tag: "pager",
  attr?: {
    id?: string;
    page?: number;
    rows?: number;
    total?: number;
    jump?: boolean;
    rowsOption?: number[];
    visible?: boolean;
  }
  statistic: (page: number, rows: number, total: number) => string;
  onPageChange: (pageCurr: number, pageTo: number) => void | boolean;
  onRowsChange: (rowCurr: number, rowsTo: number) => void | boolean;
}

export default Pager;
