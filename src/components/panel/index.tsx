import * as React from "react";
import IPanel from "@types-component/panel";
import IProps from "@types-common/props";
import Item from "@components/item";
import "./style.less";

function Panel(props: IProps<IPanel>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderTop = () => {
    if (!config.title) {
      return null;
    }
    return (
      <div className="dk-panel-header">
        <span className="title">{ config.title }</span>
      </div>
    );
  };

  const renderContent = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1
    ) {
      return null;
    }
    return (
      <div className="dk-panel-body">
        <Item configs={ config.items }/>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <>
        { renderTop() }
        { renderContent() }
      </>
    );
  };

  return render();

}

export default Panel;