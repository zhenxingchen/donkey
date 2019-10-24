/**
 * 组件通用事件
 */
export default interface IEvent {
  onMount?: (config) => void;
  onRemove?: (config) => void;
}