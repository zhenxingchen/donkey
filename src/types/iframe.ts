export default interface IIFrame {
  tag?: "iframe";
  cols?: string | string[];
  attr?: {
    name?: string;
    src?: string;
    className?: string;
    style?: {};
  };
  onLoad: () => void;
}