import ICols from "../layout/cols";
export default interface IImg extends ICols {
  tag?: "img";
  attr?: {
    id?: string;
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: {};
  };
  onLoad?: () => void;
}