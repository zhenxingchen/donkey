import * as React from "react";
import * as ReactDOM from "react-dom";
import log from "./shared/log";
import Donkey from "./components/donkey";

import "./style/base.less";
import "./style/layout.less";
import "./style/space.less";
import "./style/media.less";
import "./style/form.less";
import "./style/transition.less";
// import "./style/webkit.less";

const dk = {
  start: (config: any, id: string = "donkey") => {
    if (!config) {
      log.error("please set your config");
      return ;
    }
    log.debug(`donkey will render on the ${id}`);
    ReactDOM.render(
      <Donkey config={config}/>,
      document.getElementById(id) as HTMLElement
    );
  }
};

window["dk"] ? console.error("donkey is exist") : window["dk"] = dk;
