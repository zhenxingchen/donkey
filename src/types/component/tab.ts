import IComponent from "@types-common/component";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface ITab extends IComponent, ILayout {
  tag: "tab";
  text?: string;
  disabled?: boolean;
  items?: IItem[];
  onShow: (config: ITab) => void;
  onHide: (config: ITab) => void;
}

export default ITab;