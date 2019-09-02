import * as React from "react";
import { FormContext } from "../../shared/context";
import IProps from "../../types/common/props";
import ITree from "../../types/components/tree";
import util from "../../shared/util";

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
      <div className={`dk-tree ${util.getClassName(config.cols)}`}>
        <div className="dk-tree-container">
          树节点
        </div>
      </div>
    );
  };

  return render();
}

export default Tree;
