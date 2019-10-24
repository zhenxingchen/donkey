import ILayout from "@types-common/layout";
/**
 * 自定义组件
 */
export default interface IComponent extends ILayout {
  tag: string;
  attr?: {};
  render: (config: IComponent) => string;
}