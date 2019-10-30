import * as React from "react";
import IProps from "@types-common/props";
import IIFrame from "@types-component/iframe";

import "./style.less";

function IFrame(props: IProps<IIFrame>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>iframe</>);
  };

  return render();

}

export default IFrame;