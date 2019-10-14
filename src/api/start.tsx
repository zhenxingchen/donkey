import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalContext } from "../shared/context";
import Item from "../components/item";
import log from "../shared/log";

interface IOptions {
  root: string,
  theme?: "blue",
  language?: "cn" | "en"
}

/**
 * 渲染单页
 */
export function start(config: any, id: string = "donkey", options?: IOptions) {
  if (!config) {
    log.error("please set your config");
    return ;
  }
  const target = document.getElementById(id);
  if (!target) {
    log.error("render target is not exist, please make sure you had set the ${id}");
  }
  ReactDOM.render(
    <GlobalContext.Provider value={ [options] }>
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
 * 渲染路由
 */
export function router() {
  // todo 支持单页应用
}