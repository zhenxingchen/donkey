import IAjax from "../common/ajax";
import ILayout from "../common/layout";
import IValidate from "../common/validte";
import { IFormItem } from "./form";
/**
 * 下拉框
 * - support multiple
 * - support search
 * - support remote search
 * - support pager
 * - support ajax
 * - support data convert
 * - support react in chain, one to many, many to one, many to many
 */
export default interface ISelect extends ILayout, IFormItem {
  tag?: "select";
  attr?: {
    id?: string;
    name?: string;
    value?: string | string[] | number | number[];
    page?: number;
    rows?: number;
    textField?: string;
    valueField?: string;
    placeholder?: string;
    disabled?: boolean;
    clear?: boolean;
    search?: boolean;
    multiple?: boolean;
    multipleSize?: number;
    remote?: boolean;
    remoteKeyName?: string;
    parentId?: string | string[];
    parentName?: string | string[];
    parentNameAlias?: string | string[];
  };
  onChange?: (text: string) => boolean | any;
  onSelect?: (record: {}, records: {} | {}[]) => boolean | any;
  ajax?: IAjax;
  options: any[];
  validate?: IValidate;
}
