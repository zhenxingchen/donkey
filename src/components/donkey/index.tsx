
import * as React from "react";

import log from "../../shared/log";

import IConfig from "../../types/config";
import Form from "../form";

function Donkey(props: IConfig) {

  const [config] = React.useState(props.config);

  React.useEffect(() => {
    log.debug("donkey", config);
  });

  const render = () => {
    for (const i in config) {
      if (config.hasOwnProperty(i)) {
        if (i === "form") {
          return (
            <Form key={i} config={ config[i] }></Form>
          );
        }
      }
    }
  };

  return (
    <div className="dk-main">
      { render() }
    </div>
  );

}

export default Donkey;
