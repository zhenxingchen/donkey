import { ajaxTrigger } from "./ajax";
import { configUpdate } from "./config";
import { fetch } from "./fetch";
import * as json from "./json";
import { start } from "./start";
import * as table from "./table";

export default {
  ajaxTrigger,
  configUpdate,
  fetch,
  ...json,
  start,
  ...table
};
