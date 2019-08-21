import * as React from "react";
import IProps from "../../types/common/props";
import IHtml from "../../types/components/html";

import "./style.less";

function Html(props: IProps<IHtml>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-html">

      </div>
    );
  };

  return render();

}

export default Html;