import * as React from "react";
import IProps from "@types-common/props";
import IHtml from "@types-component/html";

import "./style.less";

function Html(props: IProps<IHtml>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>html</>);
  };

  return render();

}

export default Html;