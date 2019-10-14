import * as React from "react";
import IPanel from "../../types/components/panel";
import IProps from "../../types/common/props";
import Item from "../item";
import { Layout } from "../../utils";
import "./style.less";

function Panel(props: IProps<IPanel>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const renderTop = () => {
    if (!config.attr.title) {
      return null;
    }
    return (
      <div className="dk-panel-top">
        <span className="title">{ config.attr.title }</span>
      </div>
    );
  };

  const renderContent = () => {
    if (!config.items || !(config.items instanceof Array) || config.items.length < 1 ) {
      return null;
    }
    return (
      <div className="dk-panel-content">
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
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          { renderTop() }
          { renderContent() }
        </div>
      </div>
    );
  };

  return render();

}

export default Panel;