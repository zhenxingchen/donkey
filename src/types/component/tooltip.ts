/**
 * 工具提示
 */
export default interface ITooltips {
  tag: "tooltip";
  attr: {
    id?: string;
    visible?: boolean;
  }
}