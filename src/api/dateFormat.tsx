import * as React from "react";

function dateFormat(
  target: string | number | Date,
  fmt: string = "yyyy-MM-dd HH:mm:ss"
) {
  let date = null;
  if (typeof target === "number") {
    date = new Date(target);
  } else if (typeof target === "string") {
    date = Date.parse(target);
  } else if (target instanceof Date) {
    date = target;
  } else {
    return target;
  }
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  }
  let format = fmt;
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
}

export default dateFormat;
