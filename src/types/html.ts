export default interface IHtml {
  tag?: "html";
  cols?: string | string[];
  attr?: {
    id?: string;
    script?: string | [];
    link?: string | [];
    className?: string;
    style?: {};
  };
  onLoad?: () => void;
}