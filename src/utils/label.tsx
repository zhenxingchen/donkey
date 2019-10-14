import * as React from "react";

/**
 * label convert
 */
export default (config) => {
  if (!config.label) {
    return null;
  }
  if (config.hasOwnProperty('label')) {
    return (
      <label
        className={`dk-label ${config.validate && config.validate.required ? "dk-required" : ""}`}
        style={ config.labelStyle }
        htmlFor={ config.attr.id ? config.attr.id : "" }
      >
        { config.label }
      </label>
    );
  }
  return null;
};
