import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import IBlock from "@types-component/block";
import Item from "@components/item";

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
      <div
        className={Layout.containerClassName(config)}
        style={Layout.containerStyle(config)}
      >
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
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        { renderItems() }
      </div>
    );
  }

  return render();
}

export default Block;