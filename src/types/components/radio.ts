import ICols from "../layout/cols";
export default interface IRadio extends ICols {
  tag?: "radio";
  attr?: {
    id?: string;
    name?: string;
    text?: string | boolean | number;
    value?: any;
    disabled?: boolean;
    className?: string;
    style?: {};
  },
  onChange?: (target: HTMLInputElement) => boolean | void;
}
