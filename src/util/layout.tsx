import * as React from "react";
import { CLS, PREFIX } from "@shared/constant";
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
    cs.push(
      REG.COLS.test(c)
      ? `${PREFIX}-${c}`
      : c
    );
  }
  return cs.length > 0 ? cs.join(" ") : null;
};

const _formItem = (config: IConfig) => {
  return config && config.hasOwnProperty("label")
    ? CLS.form.item
    : null;
};

const Layout = {

  labelClassName: (config: IConfig) => {
    const className = [];
    className.push(`${PREFIX}-label`);
    if (
      config["validate"]
      && config["validate"]["required"]
    ) {
      className.push(`${PREFIX}-required-after`);
    }
    config && config.labelClassName
      ? className.push(config.labelClassName)
      : "";
    return className.join(" ");
  },

  labelStyle: (config: IConfig) => {
    return config && config.labelStyle
      ? config.labelStyle
      : {};
  },

  rootClassName: (config: IConfig) => {
    const className = [];
    className.push(`${PREFIX}-${config.tag}`);
    const formItem = _formItem(config);
    const cols = _cols(config);
    formItem ? className.push(formItem) : "";
    cols ? className.push(cols) : "";
    config && config.containerClassName
      ? className.push(config.containerClassName)
      : "";
    return className.join(" ");
  },

  rootStyle: (config: IConfig) => {
    return config && config.rootStyle
      ? config.rootStyle
      : {};
  },

  containerClassName: (config: IConfig) => {
    const className = [];
    className.push(`${PREFIX}-${config.tag}-container`);
    config && config.containerClassName
      ? className.push(config.containerClassName)
      : "";
    return className.join(" ");
  },

  containerStyle: (config: IConfig) => {
    const style = config.hasOwnProperty("label")
      ? {width: "calc(100% - 110px)"}
      : {};
    return config && config.containerStyle
      ? config.containerStyle
      : style;
  },

  componentClassName: (config: IConfig) => {
    const className = [];
    config && config.componentClassName
      ? className.push(config.containerClassName)
      : "";
    return className.length > 0 ? className.join(" ") : "";
  },

  componentStyle: (config: IConfig) => {
    return config && config.componentStyle
      ? config.componentStyle
      : {};
  }

};

export default Layout;
