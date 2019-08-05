import IItem from "./item";

/**
 * duplicate select
 * - with search
 * - with page
 * - with ajax
 * - with data convert
 */
export default interface ISelects extends IItem {
  tag: "selects";
  attr?: {
    style?: {};
    className?: string;
  }
}