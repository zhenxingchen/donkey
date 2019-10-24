import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import IIcon from "@types-component/icon";

import "./style.less";

function Icon(props: IProps<IIcon>) {

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
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        { Label(config) }
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          <i
            className={`fa ${config.attr.name} ${Layout.componentClassName(config)}`}
            style={Layout.containerStyle(config)}
          >
          </i>
        </div>
      </div>
    );
  };

  return render();

}

export default Icon;