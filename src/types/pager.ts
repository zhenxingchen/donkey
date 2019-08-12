/**
 * 分页
 */
export default interface Pager {
  tag?: "pager",
  cols?: string | string[];
  attr?: {
    id?: string;
    page?: number;
    rows?: number;
    total?: number;
    jump?: boolean;
    rowsOption?: number[];
  }
  statistic: (page: number, rows: number, total: number) => string;
  onPageChange: (pageCurr: number, pageTo: number) => void | boolean;
  onRowsChange: (rowCurr: number, rowsTo: number) => void | boolean;
}
