/**
 * validate
 */
export default interface IValidate {
  tagName?: string;

  required?: boolean;
  minLength?: number;
  maxLength?: number;
  rangeLength?: [number, number];
  min?: number;
  minEqual?: number;
  max?: number;
  maxEqual?: number;
  range?: [number, number];
  rangeEqual?: [number, number];
  equal?: number;
  minTo?: string;
  maxTo?: string;
  equalTo?: string;
  creditCardCn?: boolean;
  idCardCn?: boolean;
  reg?: string | RegExp | object;

  errorMsg: {
    required?: string;
    minLength?: string;
    maxLength?: string;
    rangeLength?: string;
    min?: string;
    minEqual?: string;
    max?: string;
    maxEqual?: string;
    range?: string;
    rangeEqual?: string;
    equal?: string;
    minTo?: string;
    maxTo?: string;
    equalTo?: string;
    creditCardCn?: string;
    idCardCn?: string;
    reg?: string;
  }
}
