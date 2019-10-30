import * as React from "react";
import { Layout } from "@util";
import Constant from "@shared/constant";
import IProps from "@types-common/props";
import ISide from "@types-component/side";

import "./style.less";

function Side(props: IProps<ISide>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    return (
      <div
        className={`${Layout.rootClassName(config)}`}
        style={Layout.rootStyle(config)}
      >
        <div
          className={`${Layout.containerClassName(config)}`}
          style={Layout.containerStyle(config)}
        >
          side
        </div>
      </div>
    );
  };

  return render();
}

export default Side;
