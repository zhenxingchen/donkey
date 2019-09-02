import * as React from "react";
import IProps from "../../types/common/props";
import IBlock from "../../types/components/block";
import Item from "../item";
import util from "../../shared/util";

import "./style.less";

function Block(props: IProps<IBlock>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (
      <div className={`dk-block-container ${util.getClassName(config.attr.className)}`}>
        <Item configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div
        className={ `dk-block ${util.getClassName(config.cols)}` }
        style={ {...config.attr.style} }
      >
        { renderItems() }
      </div>
    );
  }

  return render();
}

export default Block;