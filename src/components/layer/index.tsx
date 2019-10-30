import * as React from "react";
import IProps from "@types-common/props";
import ILayer from "@types-component/layer";

import "./style.less";

function Layer(props: IProps<ILayer>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    return (<>Layer</>);
  };

  return render();
}

export default Layer;
