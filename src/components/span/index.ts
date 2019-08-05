import * as React from "react";

import ISpan from "../../types/span";
import IConfig from "../../types/config";

function Span(props: IConfig<ISpan>) {

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

export default Span;
