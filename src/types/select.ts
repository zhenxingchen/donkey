import IAjax from "./ajax";
import IValidate from "./validte";
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
export default interface ISelect {
  tag?: "select";
  cols?: string | string[];
  label?: string;
  attr?: {
    id?: string;
    name?: string;
    value?: string | string[] | number | number[];
    placeholder?: string;
    disabled?: boolean;

    clear?: boolean;
    search?: boolean;

    multiple?: boolean;
    multipleSize?: number;

    remote?: boolean;
    remoteKeyName?: string;

    textField?: string;
    valueField?: string;

    page?: number;
    rows?: number;

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
