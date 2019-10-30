import IAjax from "@types-common/ajax";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IBread extends ILayout {
  tag: "bread";
  attr?: {
    id?: string;
    split?: string;
    visible?: boolean;
  },
  items?: IItem[];
  ajax?: IAjax;
}

export default IBread;

