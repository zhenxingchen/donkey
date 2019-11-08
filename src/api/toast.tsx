import * as React from "react";
import { Doc } from "@util";
import { PREFIX } from "@shared/constant";
import log from "@shared/log";
import IToast from "@types-component/toast";
import Toast from "@components/toast";

function toast(param?: IToast | string) {
  // param
  if (!param) {
    log.error("dk.toast need a param");
    return false;
  }
  // type convert
  let config = null;
  if (typeof param === "string") {
    config = {
      message: param,
      delay: 2000
    }
  } else {
    config = param;
  }
  // validate message
  if (!config.message) {
    log.error(`${PREFIX}.toast need a message`);
    return false;
  }
  const target = Doc.create("div");
  Doc.render(<Toast {...config}/>, target);
  // delay close
  const delay = config.delay && config.delay > 0 ? config.delay : 2000;
  setTimeout(() => Doc.unmoutAndRemove(target), delay);
}

export default toast;
