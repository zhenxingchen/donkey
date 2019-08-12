import * as React from "react";
import IProps from "../../types/props";
import ITree from "../../types/tree";
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
      <div className={`dk-tree ${util.getCols(config.cols)}`}>

      </div>
    );
  };

  return render();
}

export default Tree;
