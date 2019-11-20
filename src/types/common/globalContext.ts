
interface IGlobalContext {
  // root document id
  root: string;
  // global ajax header
  ajaxHeader?: {};
  // before ajax start handler
  ajaxStart?: (data?: {}) => boolean | void;
  // after ajax end handler
  ajaxEnd?: (result?: {}) => boolean | void;
  // default theme
  theme?: "blue";
  // international language
  language?: "cn" | "en";
  // debug enable console output
  debug?: boolean;
}

export default IGlobalContext;
