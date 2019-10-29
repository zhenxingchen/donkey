export default interface IGlobal {
  // root document id
  root: string,
  // css-prefix
  prefix: string;
  // css-inner-prefix
  prefixInner: string;
  // default theme
  theme?: "blue";
  // international language
  language?: "cn" | "en";
  // debug enable console output
  debug?: boolean;
}