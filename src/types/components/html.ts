import ICols from "../layout/cols";
export default interface IHtml extends ICols {
  tag?: "html";
  attr?: {
    id?: string;
    scriptUrl?: string | [];
    styleUrl?: string | [];
    className?: string;
    style?: {};
  };
  onLoad?: () => void;
  onError?: () => void;
}