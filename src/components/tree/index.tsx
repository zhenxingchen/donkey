import * as React from "react";
import { FormContext } from "@shared/context";
import IProps from "@types-common/props";
import ITree from "@types-component/tree";
import { Label, Layout } from "@util";

function Tree(props: IProps<ITree>) {

  const [formContext] = React.useContext(FormContext);
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
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        { Label(config) }
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          树节点
        </div>
      </div>
    );
  };

  return render();
}

export default Tree;
