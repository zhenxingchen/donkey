import * as React from "react";

import IConfig from "../../types/config";
import ITree from "../../types/tree";

function Tree(props: IConfig<ITree>) {

  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    setConfig(config);
  }, [ props.config ]);

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className="dk-tree">

      </div>
    );
  };

  return render();
}

export default Tree;
