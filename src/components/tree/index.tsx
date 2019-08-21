import * as React from "react";
import IProps from "../../types/common/props";
import ITree from "../../types/components/tree";
import util from "../../shared/util";

function Tree(props: IProps<ITree>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });

  React.useEffect(() => {
  }, [ props.config ]);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-tree ${util.getClassName(config.cols)}`}>
        树节点
      </div>
    );
  };

  return render();
}

export default Tree;
