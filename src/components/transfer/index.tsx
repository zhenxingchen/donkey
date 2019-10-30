import * as React from "react";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ITransfer from "@types-component/transfer";

import "./style.less";

function Transfer(props: IProps<ITransfer>) {

  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>transfer</>);
  };

  return render();

}

export default Transfer;