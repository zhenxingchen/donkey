import * as React from "react";
import IProps from "@types-common/props";
import ILoading from "@types-component/loading";

import "./style.less";

function Loading(props: IProps<ILoading>) {

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
      <div className="dk-loading">
        loading
      </div>
    );
  };

  return render();

}

export default Loading;