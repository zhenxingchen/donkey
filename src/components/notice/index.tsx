import * as React from "react";
import { Layout } from "@util";
import IProps from "@types-common/props";
import INotice from "@types-component/notice";

import "./style.less";

function Notice(props: IProps<INotice>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    return (<>notice</>);
  };

  return render();
}

export default Notice;
