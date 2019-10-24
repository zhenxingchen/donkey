import ILayout from "@types-common/layout";
import { IFormItem } from "@types-component/form";

/**
 * 分页
 */
export default interface Pager extends ILayout, IFormItem {
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
