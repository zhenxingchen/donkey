
interface IComponent {
  id?: string;
  visible?: boolean;
  onMount?: (config) => void;
  onRemove?: (config) => void;
}

export default IComponent;
