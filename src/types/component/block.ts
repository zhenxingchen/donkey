import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface IBlock extends ILayout {
  tag: "block";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[]
}

export default IBlock;
