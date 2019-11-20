import * as React from "react";
import { FormContext } from "@shared/context";
import IProps from "@types-common/props";
import ITimeLine from "@types-component/timeline";

import "./style.less";

function TimeLine(props: IProps<ITimeLine>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const render = () => {
    if (!config) {
      return null;
    }
    return <>time line</>;
  };

  return render();
}

export default TimeLine;
