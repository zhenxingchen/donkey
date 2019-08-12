export default interface IImg {
  tag?: "img";
  cols?: string | string[];
  attr?: {
    id?: string;
    src?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: {};
  };
  onLoad?: () => void;
}