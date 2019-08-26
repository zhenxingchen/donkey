
export default interface ISwitch {
  tag: "switch";
  attr?: {
    className?: string;
    style?: {}
  };
  onChange?: (from, to) => boolean;
}
