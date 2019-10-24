import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ITransfer from "@types-component/transfer";

import "./style.less";

function Transfer(props: IProps<ITransfer>) {

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
          transfer
        </div>
      </div>
    );
  };

  return render();

}

export default Transfer;