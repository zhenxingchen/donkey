export default interface IGlobal {
  // root document id
  root: string,
  // default theme
  theme?: "blue";
  // international language
  language?: "cn" | "en";
  // debug enable console output
  debug?: boolean
}