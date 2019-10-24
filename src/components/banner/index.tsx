import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import IBanner from "@types-component/banner";

import "./style.less";

function Banner(props: IProps<IBanner>) {

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
            banner
        </div>
      </div>
    );
  };

  return render();
}

export default Banner;
