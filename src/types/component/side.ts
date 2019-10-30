import { IFormItem } from "@types-component/form";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ISide extends ILayout, IFormItem {
  tag: "side";
  attr?: {
    id?: string;
  };
  items: IItem[];
}

export default ISide;
