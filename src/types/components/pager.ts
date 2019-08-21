import ICols from "../layout/cols";
export default interface Pager extends ICols {
  tag?: "pager",
  attr?: {
    id?: string;
    page?: number;
    rows?: number;
    total?: number;
    jump?: boolean;
    rowsOption?: number[];
    className?: string;
    style?: {};
  }
  statistic: (page: number, rows: number, total: number) => string;
  onPageChange: (pageCurr: number, pageTo: number) => void | boolean;
  onRowsChange: (rowCurr: number, rowsTo: number) => void | boolean;
}
