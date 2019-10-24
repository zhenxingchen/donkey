import * as React from "react";
import IProps from "@types-common/props";
import ITooltip from "@types-component/tooltip";

import "./style.less";

function Tooltip(props: IProps<ITooltip>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-tooltip">
        tooltip
      </div>
    );
  };

  return render();

}

export default Tooltip;