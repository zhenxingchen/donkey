import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import IFrame from "@types-component/frame";

import "./style.less";

function Frame(props: IProps<IFrame>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });

  const render = () => {
    return (
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          frame
        </div>
      </div>
    );
  };

  return render();
}

export default Frame;
