import * as React from "react";
import IAjax from "@types-common/ajax";
import Axios from "axios";

function ajax(ajax: IAjax) {
  if (!ajax) {
    return false;
  }
  Axios.request({

  });
}

export default ajax;
