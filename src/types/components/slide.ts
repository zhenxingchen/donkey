import ICols from "../layout/cols";
import { IFormControl } from "./form";

export default interface ISlide extends ICols, IFormControl {
  tag?: "slide";
  attr?: {

  };
}