import * as React from "react";

/**
 * util for framework
 */
const util = {

  /**
   * cols or align or space class convert
   */
  getClassName: (className) => {
    if (!className) {
      return "";
    }
    const classNameConvert = (c) => (
      /^(tac|tar|tal)$/.test(c)
      || /^(p|m)(t|l|r|b)?\d+$/.test(c)
      || /^(w|h)(p)?\d+$/.test(c)
      || /^(lg|md|sm|xs)\d+$/.test(c)
        ? `dk-${c}` : c
    );
    const css = className.split(" ");
    const cs = [];
    for (const c of css) {
      cs.push(classNameConvert(c));
    }
    return cs.join(" ");
  },

  /**
   * label convert
   */
  getLabel: (config) => {
    if (!config.label) {
      return null;
    }
    return (
      <label
        className={`label-for ${config.validate && config.validate.required ? "required" : ""}`}
        htmlFor={ config.attr.id ? config.attr.id : "" }
      >
        { config.label }
      </label>
    );
  },

  /**
   * fetch custom resource
   */
  fetch: (url: string | string[], onLoad: () => void, onError: () => void) => {

  },
};

export default util;