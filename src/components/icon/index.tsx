import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import IIcon from "@types-component/icon";

import "./style.less";

function Icon(props: IProps<IIcon>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <i
        className={`fa ${config.name} ${Layout.componentClassName(config)}`}
        style={Layout.containerStyle(config)}
      >
      </i>
    );
  };

  return render();

}

export default Icon;