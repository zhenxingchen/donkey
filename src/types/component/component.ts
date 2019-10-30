import ILayout from "@types-common/layout";

export default interface IComponent extends ILayout {
  tag: string;
  attr?: {};
  render: (config: IComponent) => string;
}