import ICols from "../layout/cols";
import { IFormControl } from "./form";

export default interface IProgress extends ICols, IFormControl {
  tag?: "progress";
  attr?: {
    id?: string;
    name?: string;
  };
}