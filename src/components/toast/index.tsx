import * as React from "react";
import IProps from "@types-common/props";
import IToast from "@types-component/toast";

import "./style.less";

function Toast(props: IProps<IToast>) {

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
      <div className="dk-toast">
        toast
      </div>
    );
  };

  return render();

}

export default Toast;