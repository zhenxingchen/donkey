import * as React from "react";
import IProps from "@types-common/props";
import IDiv from "@types-component/div";
import Item from "@components/item";

import "./style.less";

function Div(props: IProps<IDiv>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const renderItems = () => {
    if (!config.items
      || !(config.items instanceof Array)
      || config.items.length < 1) {
      return null;
    }
    return (<Item configs={ config.items }/>);
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderItems();
  };

  return render();
}

export default Div;
