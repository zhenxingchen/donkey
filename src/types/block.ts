
import { IFormItem } from "./form";

import ITable from "./table";
import IPager from "./pager";

export default interface IBlock {
  tag?: "block";
  cols?: number;
  attr?: {
    title?: string;
    fold?: boolean;
    style?: {},
    className?: string
  };
  items: IFormItem[];
  table?: ITable;
  pager?: IPager;
}
