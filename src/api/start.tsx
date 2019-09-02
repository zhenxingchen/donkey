import * as React from "react";
import * as ReactDOM from "react-dom";
import Item from "../components/item";
import log from "../shared/log";

export function start(config: any, id: string = "donkey") {
  if (!config) {
    log.error("please set your config");
    return ;
  }
  const target = document.getElementById(id);
  if (!target) {
    log.error("render target is not exist, please make sure you had set the ${id}");
  }
  log.debug(`donkey will render on the ${id}`);
  ReactDOM.render(
    <Item config={config} />,
    document.getElementById(id) as HTMLElement
  );
}
