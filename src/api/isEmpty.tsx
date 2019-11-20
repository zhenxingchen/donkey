import * as React from "react";

function isEmpty(value: any) {
  if (null === value || undefined === value) {
    return true;
  } else if (typeof value === "string"
    &&  ('' === value || value.length < 1)) {
    return true;
  } else if (value instanceof Array && value.length < 1) {
    return true;
  } else if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }
  return false;
}

export default isEmpty;
