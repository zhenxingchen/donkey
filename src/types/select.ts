import IItem from "./item";
import IAjax from "./ajax";

/**
 * single select
 * - with search
 * - with pager
 * - with ajax
 * - with data convert
 * - with react in chain
 */
export default interface ISelect extends IItem {
  tag?: "select";
  attr?: {
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    clear?: boolean;
    search?: boolean;
    remote?: boolean;
    remoteKeyName?: string;
    textField?: string;
    valueField?: string;
    page?: number;
    rows?: number;
    parentId?: string | string[];
    parentName?: string | string[];
    parentNameAlias?: string | string[];
    style?: string | {};
    className?: string;
  };
  onChange?: (text: string) => boolean | any;
  onSelect?: (target: HTMLSelectElement) => boolean | any;
  ajax?: IAjax;
  options: {}[];
}
