import * as React from "react";
import { disabledSubject, enableSubject } from "@shared/subject";
import { Id } from "@util";
import IIds from "@types-common/ids";

function useConfig<T>(initialConfig: T | (() => T)) {

  const [config, setConfig] = React.useState(
    typeof initialConfig === "function"
      ? (initialConfig as (() => T))()
      : initialConfig
  );

  React.useEffect(() => {
    disabledSubject.subscribe((id: IIds) => {
      if (Id.isMatch(id, config["id"])) {
        config["disabled"] = true;
        setConfig({ ...config });
      }
    });
    enableSubject.subscribe((id: IIds) => {
      if (Id.isMatch(id, config["id"])) {
        config["disabled"] = false;
        setConfig({ ...config });
      }
    });
  }, []);

  const updateConfig = (config: T) => {
    setConfig({ ...config });
  };

  console.log("bbbbbbbbb", config["text"]);

  return [config];
}

export default useConfig;
