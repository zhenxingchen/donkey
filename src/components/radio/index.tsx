import * as React from "react";
import { FormContext } from "../../shared/context";
import bus from "../../shared/bus";
import log from "../../shared/log";
import util from "../../shared/util";
import IProps from "../../types/common/props";
import IRadio from "../../types/components/radio";

import "./style.less";

function Radio(props: IProps<IRadio>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    !config.attr.id ? config.attr.id = `dk-radio-${Math.random()}` : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);

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
      <div className={`dk-radio ${util.getClassName(config.cols)}`}>
        <div className="dk-choice radio">
          <input
            id={ config.attr.id }
            name={ config.attr.name }
            value={ config.attr.value }
            type="radio"
            checked={ config.attr.value === formContext.data[config.attr.name] }
            disabled={ !!config.attr.disabled || formContext.disabled }
            onChange={ changeHandler }
          />
          <label className="box" htmlFor={ config.attr.id }>
            <span className="circle dk-transition-border">
              <i className="checked dk-transition-opacity"/>
            </span>
            { config.attr.text ? (<span className="text">{ config.attr.text }</span>) : null }
          </label>
        </div>
      </div>
    );
  };

  return render();
}

export default Radio;
