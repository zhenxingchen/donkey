import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalContext } from "@shared/context";
import IGlobalContext from "@types-common/globalContext";
import Item from "@components/item";
import log from "@shared/log";

function render(config: any, id: string = "donkey", global?: IGlobalContext) {

  const configCheck = () => {
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
    return true;
  };

  const globalContextInit = () => {
    // global
    !global ? global = { root: id } : null;
    global.root = id;
    !global.language ? global.language = "cn" : null;
    !global.theme ? global.theme = "blue" : null;
  };

  const render = () => {
    if (!configCheck()) {
      return null;
    }
    globalContextInit();
    return (
      ReactDOM.render(
        <GlobalContext.Provider value={ [global] }>
          {
            config instanceof Array
              ? <Item configs={config} />
              : <Item config={config} />
          }
        </GlobalContext.Provider>,
        document.getElementById(id) as HTMLElement,
        () => log.debug("donkey render success...")
      )
    );
  };

  // render
  return render();
}

export default render;
