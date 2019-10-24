import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalContext } from "@shared/context";
import IGlobal from "@types-common/global";
import Item from "@components/item";
import log from "@shared/log";

/**
 * single page
 */
export function render(
  config: any,
  id: string = "donkey",
  global: IGlobal = { root: "donkey" }
) {
  // check config
  if (!config) {
    log.error("please set your config");
    return false;
  }
  // check target
  const target = document.getElementById(id);
  if (!target) {
    log.error(`target not exist, please set the ${id} for root html tag`);
    return false;
  }
  // global
  global.root = id;
  !global.language ? global.language = "cn" : null;
  !global.theme ? global.theme = "blue" : null;
  // render
  ReactDOM.render(
    <GlobalContext.Provider value={ [global] }>
      {
        config instanceof Array
          ? <Item configs={config} />
          : <Item config={config} />
      }
    </GlobalContext.Provider>,
    document.getElementById(id) as HTMLElement
  );
}

/**
 * router page
 */
export function router() {
  // todo 支持单页应用
}