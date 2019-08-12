import * as React from "react";
import IPanel from "../../types/panel";
import IProps from "../../types/props";
import Items from "../items";
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
      <div className="panel-top">
        <span className="title">{ config.attr.title }</span>
      </div>
    );
  };

  const renderContent = () => {
    if (!config.items || !(config.items instanceof Array) || config.items.length < 1 ) {
      return null;
    }
    return (
      <div className="panel-content">
        <Items configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-panel ${util.getCols(config.cols)}`}>
        <div className="panel-container" style={ {...config.attr.style} }>
          { renderTop() }
          { renderContent() }
        </div>
      </div>
    );
  };

  return render();

}

export default Panel;