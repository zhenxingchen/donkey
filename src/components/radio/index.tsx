import * as React from "react";
import { FormContext } from "../../shared/context";
import bus from "../../shared/bus";
import log from "../../shared/log";
import util from "../../shared/util";
import IProps from "../../types/props";
import IRadio from "../../types/radio";

import "./style.less";

function Radio(props: IProps<IRadio>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  React.useEffect(() => {
    const config = props.config;
    if (!config.attr) {
      config.attr = {};
    }
    if (!config.attr.id) {
      config.attr.id = `dk-radio-${Math.random()}`;
    }
    setConfig(config);
  }, [ props.config ]);

  const changeHandler = () => {
    if (formContext.data[config.attr.name] === config.attr.value) {
      return ;
    }
    bus.emit("dk-form-data-report", {
      formName: formContext.name,
      data: { [config.attr.name]: config.attr.value }
    });
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return (
      <div className={`dk-radio ${util.getCols(config.cols)}`}>
        <input
          id={ config.attr.id }
          name={ config.attr.name }
          value={ config.attr.value }
          type="radio"
          checked={ config.attr.value === formContext.data[config.attr.name] }
          disabled={ !!config.attr.disabled || formContext.disabled }
          onChange={ changeHandler }
        />
        <label className="dk-radio-box" htmlFor={ config.attr.id }>
          <span className="dk-radio-circle dk-transition-border">
            <i className="dk-radio-checked dk-transition-opacity"></i>
          </span>
          <span className="dk-radio-text">{ config.attr.text }</span>
        </label>
      </div>
    );
  };

  return render();
}

export default Radio;
