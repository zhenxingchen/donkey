import * as React from "react";
import IConfig from "@types-component/item";

const REG = {
  COLS: /^([1-9]|1[0-9]|2[0-4])|((lg|md|sm|xs)([1-9]|1[0-9]|2[0-4]))$/
};

const _cols = (config: IConfig) => {
  if (!config || !config.cols) {
    return "";
  }
  const css = config.cols.split(" ");
  const cs = [];
  for (const c of css) {
    cs.push(REG.COLS.test(c) ? `dk-${c}` : c);
  }
  return cs.length > 0 ? cs.join(" ") : null;
};

const _formItem = (config: IConfig) => {
  return config && config.hasOwnProperty("label")
    ? "dk-form-item"
    : null;
};

const Layout = {

  labelClassName: (config: IConfig) => {
    const className = [];
    className.push("dk-label");
    if (
      config["validate"]
      && config["validate"]["required"]
    ) {
      className.push("dk-required-after");
    }
    config && config.layout && config.layout.labelClassName
      ? className.push(config.layout.labelClassName)
      : "";
    return className.join(" ");
  },

  labelStyle: (config: IConfig) => {
    return config && config.layout && config.layout.labelStyle
      ? config.layout.labelStyle
      : {};
  },

  rootClassName: (config: IConfig) => {
    const className = [];
    className.push(`dk-${config.tag}`);
    const formItem = _formItem(config);
    const cols = _cols(config);
    formItem ? className.push(formItem) : "";
    cols ? className.push(cols) : "";
    config && config.layout && config.layout.containerClassName
      ? className.push(config.layout.containerClassName)
      : "";
    return className.join(" ");
  },

  rootStyle: (config: IConfig) => {
    return config && config.layout && config.layout.rootStyle
      ? config.layout.rootStyle
      : {};
  },

  containerClassName: (config: IConfig) => {
    const className = [];
    className.push(`dk-${config.tag}-container`);
    config && config.layout && config.layout.containerClassName
      ? className.push(config.layout.containerClassName)
      : "";
    return className.join(" ");
  },

  containerStyle: (config: IConfig) => {
    const style = config.hasOwnProperty("label")
      ? {width: "calc(100% - 110px)"}
      : {};
    return config && config.layout && config.layout.containerStyle
      ? config.layout.containerStyle
      : style;
  },

  componentClassName: (config: IConfig) => {
    const className = [];
    config && config.layout && config.layout.componentClassName
      ? className.push(config.layout.containerClassName)
      : "";
    return className.length > 0 ? className.join(" ") : "";
  },

  componentStyle: (config: IConfig) => {
    return config && config.layout && config.layout.componentStyle
      ? config.layout.componentStyle
      : {};
  }

};

export default Layout;
