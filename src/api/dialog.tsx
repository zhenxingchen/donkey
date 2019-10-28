import * as React from "react";
import { Dialog } from "@util";
import log from "@shared/log";
import IToast from "@types-component/toast";
import Loading from "@components/loading";
import Modal from "@components/modal";
import Toast from "@components/toast";
import Tooltip from "@components/tooltip";

export function alert() {
  return (
    <Modal/>
  );
}

export function confirm() {
  return (
    <Modal/>
  );
}

export function layer() {
  return (
    <Modal/>
  );
}

export function toast(param?: IToast | string) {
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
    log.error("dk.toast need a message");
    return false;
  }
  const target = Dialog.append(<Toast {...config}/>);
  // delay close
  const delay = config.delay && config.delay > 0 ? config.delay : 2000;
  setTimeout(() => Dialog.remove(target), delay);
}

export function loading() {
  return (
    <Loading/>
  );
}

export function tooltip() {
  return (
    <Tooltip/>
  );
}
