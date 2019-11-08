import * as React from "react";
import { Layout } from "@util";
import IConfig from "@types-component/item";

export default (config: IConfig) => {
  if (!config || !config.hasOwnProperty('label')) {
    return null;
  }
  return (
    <label
      className={ Layout.labelClassName(config) }
      style={ Layout.labelStyle(config) }
      htmlFor={ config.id }
    >
      { config["label"] }
    </label>
  );
};
