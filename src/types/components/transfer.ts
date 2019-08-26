
export default interface ITransfer {
  tag?: "transfer";
  attr?: {
    className?: string;
    style?: {}
  };
  onChange?: (from, to) => boolean;
}