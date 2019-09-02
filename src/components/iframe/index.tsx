import * as React from "react";
import IProps from "../../types/common/props";
import IIFrame from "../../types/components/iframe";

import "./style.less";

function IFrame(props: IProps<IIFrame>) {

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
      <div className="dk-iframe">

      </div>
    );
  };

  return render();

}

export default IFrame;