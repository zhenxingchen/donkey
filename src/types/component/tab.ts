import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ITab extends ILayout {
  tag: "tab";
  attr?: {
    id?: string;
    text?: string;
    disabled?: boolean;
  };
  items?: IItem[];
  onShow: (config: ITab) => void;
  onHide: (config: ITab) => void;
}

export default ITab;