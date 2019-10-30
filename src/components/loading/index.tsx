import * as React from "react";
import IProps from "@types-common/props";
import ILoading from "@types-component/loading";

import "./style.less";

function Loading(props: IProps<ILoading>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>loading</>);
  };

  return render();

}

export default Loading;