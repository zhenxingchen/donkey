import * as React from "react";

function urlQuery(key?: string, url?: string) {
  const query = {};
  const _url = !url ? window.location.href : url;
  const urlReg = /^[^\?]+\?([\w\W]+)$/;
  const paramReg = /([^&=]+)=([\w\W]*?)(&|$|#)/g;
  const urlAry = urlReg.exec(_url);
  if (urlAry && urlAry[1]) {
    const param = urlAry[1];
    let result;
    while ((result = paramReg.exec(param)) != null) {
      query[result[1]] = decodeURIComponent(result[2]);
    }
  }
  return key ? query[key] : query;
}

export default urlQuery;
