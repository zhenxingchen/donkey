import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import IItem from "@types-component/item";
import ILayout from "@types-common/layout";

interface IGroup extends IComponent, IFormItem, ILayout {
  tag: "group";
  name?: string;
  items: IItem[];
  permissionAjax?: string | IAjax
}

export default IGroup;
