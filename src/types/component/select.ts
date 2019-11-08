import IAjax from "@types-common/ajax";
import IComponent from "@types-common/component";
import IFormItem from "@types-common/formItem";
import ILayout from "@types-common/layout";

/**
 * select
 * - support multiple
 * - support search
 * - support remote search
 * - support pager
 * - support ajax
 * - support data convert
 * - support react in chain, one to many, many to one, many to many
 */
interface ISelect extends IComponent, IFormItem, ILayout {
  tag: "select";
  name?: string;
  value?: string | string[] | number | number[];
  page?: number;
  rows?: number;
  textField?: string;
  valueField?: string;
  clear?: boolean;
  search?: boolean;
  multiple?: boolean;
  multipleSize?: number;
  remote?: boolean;
  remoteKeyName?: string;
  parentId?: string | string[];
  parentName?: string | string[];
  parentNameAlias?: string | string[];
  onChange?: (text: string) => boolean | any;
  onSelect?: (record: {}, records: {} | {}[]) => boolean | any;
  ajax?: IAjax;
  options: any[];
}

export default ISelect;
