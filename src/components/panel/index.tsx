import * as React from "react";
import IPanel from "../../types/components/panel";
import IProps from "../../types/common/props";
import Item from "../item";
import util from "../../shared/util";
import "./style.less";

function Panel(props: IProps<IPanel>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
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
      <div className={`dk-panel ${util.getClassName(config.cols)}`}>
        <div
          className={`dk-panel-container ${util.getClassName(config.attr.className)}`}
          style={ {...config.attr.style} }>
          { renderTop() }
          { renderContent() }
        </div>
      </div>
    );
  };

  return render();

}

export default Panel;