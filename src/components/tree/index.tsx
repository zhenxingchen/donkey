import * as React from "react";
import { FormContext } from "@shared/context";
import { Label, Layout } from "@util";
import IProps from "@types-common/props";
import ITree from "@types-component/tree";
import "./style.less";

function Tree(props: IProps<ITree>) {

  const [formContext] = React.useContext(FormContext);
  const [config] = React.useState(() => {
    const config = props.config;
    return config;
  });

  const render = () => {
    if (!config) {
      return null;
    }
    return (<>Tree</>);
  };

  return render();
}

export default Tree;
