import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface INotice extends ILayout {
  tag: "notice";
  attr?: {
    id?: string;
  };
  items: IItem[];
}

export default INotice;
