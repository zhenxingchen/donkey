import * as React from "react";

import ISelects from "../../types/selects";
import IConfig from "../../types/config";

function Selects(props: IConfig<ISelects>) {

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
  };

  return render();

}

export default Selects;
