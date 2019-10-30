import * as React from "react";
import IProps from "@types-common/props";
import IFrame from "@types-component/frame";

import "./style.less";

function Frame(props: IProps<IFrame>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    return (<>frame</>);
  };

  return render();
}

export default Frame;
