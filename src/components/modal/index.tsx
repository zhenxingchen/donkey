import * as React from "react";
import IProps from "@types-common/props";
import IModal from "@types-component/modal";

import "./style.less";

function Modal(props: IProps<IModal>) {

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
      <div className="dk-modal">
        modal
      </div>
    );
  };

  return render();

}

export default Modal;