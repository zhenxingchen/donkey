import * as React from "react";
import IProps from "@types-common/props";
import ITooltip from "@types-component/tooltip";

import "./style.less";
import { Layout } from "@util";

function Tooltip(props: IProps<ITooltip>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>tooltip</>);
  };

  return render();

}

export default Tooltip;