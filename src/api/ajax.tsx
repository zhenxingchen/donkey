import * as React from "react";
import IAjax, { IAjaxTrigger } from "@types-common/ajax";
import Axios from "axios";

/**
 * ajax or ajax trigger
 */
export function ajax(ajax: IAjax | IAjaxTrigger) {
  if (!ajax) {
    return false;
  }
  // ajax
  if (ajax.hasOwnProperty("url")) {
    Axios.request({

    });
  }
  // trigger
  else if (ajax.hasOwnProperty("id")) {

  }
}

/**
 * fetch js or css
 */
export function fetch(url: string | string[], onLoad?: () => void) {

}