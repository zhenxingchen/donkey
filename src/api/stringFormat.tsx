import * as React from "react";
import isEmpty from "./isEmpty";

function stringFormat(target: string, args: any[]) {
  if (isEmpty(target) || isEmpty(args)) {
    return target;
  }
  for (let i = 0; i < args.length; i++) {
    if (isEmpty(args[i])) args[i] = '';
  }
  return target.replace(/\{(\d+)\}/g, (m, i) => (args[i]));
}

export default stringFormat;
