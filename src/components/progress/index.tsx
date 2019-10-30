import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import IProgress from "@types-component/progress";

import "./style.less";

function Progress(props: IProps<IProgress>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>progress</>);
  };

  return render();

}

export default Progress;