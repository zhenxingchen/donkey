import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/props";
import IBlock from "../../types/block";
import Items from "../items";
import util from "../../shared/util";

import "./style.less";

function Block(props: IProps<IBlock>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {
  }, [ props.config ]);

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className="dk-block-items">
        <Items configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={ `dk-block ${util.getCols(config.cols)}` } style={ {...config.attr.style} }>
        { renderItems() }
      </div>
    );
  }

  return render();
}

export default Block;