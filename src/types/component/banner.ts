import ILayout from "@types-common/layout";
import IItem from "@types-component/item";

interface IBanner extends ILayout {
  tag?: "banner";
  attr?: {
    id?: string;
    visible?: boolean;
  };
  items?: IItem[];
}

export default IBanner;
