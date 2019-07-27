import * as React from "react";
import * as ReactDOM from "react-dom";

import log from "./shared/log";

import Donkey from "./components/donkey";

const dk = {
  start: (config: any, id: string = "donkey") => {
    if (!config) {
      log.error("please set your config config");
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