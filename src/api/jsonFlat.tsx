import * as React from "react";

function jsonFlat(json) {
  const result = {};
  // object
  const flatObject = (name, value) => {
    if (
      null === value
      || undefined === value
      || (typeof value === "string" && value.length < 1)
    ) return ;
    for (const i in value) {
      if (
        null === value
        || undefined === value
        || (typeof value === "string" && value.length < 1)
      ) continue;
      if (value[i] instanceof Array) {
        flatArray(name + i, value[i]);
      } else if (!value[i] || typeof value[i] !== 'object') {
        flatNormal(name + i, value[i]);
      } else {
        flatObject(name ? name + '.' + i + '.' : i + '.', value[i]);
      }
    }
  };
  // array
  const flatArray = (name, value) => {
    if (
      null === value
      || undefined === value
      || (typeof value === "string" && value.length < 1))
      return ;
    for (const i in value) {
      if (
        null === value
        || undefined === value
        || (typeof value === "string" && value.length < 1)
      ) continue;
      if (value[i] instanceof Array) {
        flatArray(name + '[' + i + ']', value[i]);
      } else if (!value[i] || typeof value[i] !== 'object') {
        flatNormal(name + '[' + i + ']', value[i]);
      } else {
        flatObject(name + '[' + i + ']' + '.', value[i]);
      }
    }
  };
  // normal
  const flatNormal = (name, value) => {
    if (
      null === value
      || undefined === value
      || (typeof value === "string" && value.length < 1)
    ) return ;
    result[name] = value;
  };
  // flag
  if (json instanceof Array) {
    flatArray('', json);
  } else if (!json || typeof json !== 'object') {
    flatNormal('', json);
  } else {
    flatObject('', json);
  }
  return result;
}

export default jsonFlat;
