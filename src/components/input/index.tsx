
import * as React from "react";

import log from "../../shared/log";

import IConfig from "../../types/config";
import IInputType from "../../types/input";


function Input(props: IConfig) {

  const [config, setConfig] = React.useState<IInputType>(props.config);

  React.useEffect(() => {
    log.debug("input", config);
  });

  const renderLabel = () => {
    if (config.label && config.label.length > 0) {
      return (
        <label htmlFor={ config.attr.id }>{ config.label }</label>
      );
    }
    return null;
  };

  const render = () => {
    return (
      <input
        id={ config.attr.id }
        name={ config.attr.name }
        type={ config.attr.type ? config.attr.type : "text" }
        value={ config.attr.value }
        style={ config.attr.style }
        className={ config.attr.className }
        onChange={(e) => {
          const value = e.target.value;
          config.attr.value = value;
          setConfig({ ...config });
          props.async({[config.attr.name]: value});
        }}
      />
    );
  };

  return (
    <div className="dk-input">
      { renderLabel() }
      { render() }
    </div>
  );

}

export default Input;
