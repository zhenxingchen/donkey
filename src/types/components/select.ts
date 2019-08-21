import IAjax from "../common/ajax";
import ICols from "../layout/cols";
import IValidate from "../common/validte";
import { IFormControl } from "./form";
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
export default interface ISelect extends ICols, IFormControl {
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
    className?: string;
    style?: {};
  };
  onChange?: (text: string) => boolean | any;
  onSelect?: (record: {}, records: {} | {}[]) => boolean | any;
  ajax?: IAjax;
  data: any[];
  validate?: IValidate;
}
