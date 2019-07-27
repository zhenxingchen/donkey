/**
 * 分页
 */
export default interface Pager {
  page: number;
  rows: number;
  total: number;
  rowsOption?: number[];
  statistic: (page: number, rows: number, total: number) => string;
  onPageChange: (page, rows) => void;
  onRowsChange: (page, rows) => void;
}
