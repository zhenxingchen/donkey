import ICols from "../layout/cols";
export default interface IIFrame extends ICols {
  tag?: "iframe";
  attr?: {
    name?: string;
    src?: string;
    className?: string;
    style?: {};
  };
  onLoad?: () => void;
}