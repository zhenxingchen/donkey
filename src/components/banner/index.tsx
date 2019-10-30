import * as React from "react";
import IProps from "@types-common/props";
import IBanner from "@types-component/banner";

import "./style.less";

function Banner(props: IProps<IBanner>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    return ( <>banner</> );
  };

  return render();
}

export default Banner;
