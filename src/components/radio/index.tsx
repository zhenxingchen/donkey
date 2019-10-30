import * as React from "react";
import { FormContext } from "@shared/context";
import { Id, Layout } from "@util";
import Constant from "@shared/constant";
import bus from "@shared/bus";
import IProps from "@types-common/props";
import IRadio from "@types-component/radio";

import "./style.less";

function Radio(props: IProps<IRadio>) {

  const [config] = React.useState(() => {
    const config = props.config;
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
    const checked = config.attr.value === formContext.data[config.attr.name];
    const disabled = !!config.attr.disabled || formContext.disabled;
    const radioCls = [];
    radioCls.push(Constant.icon.radio.main);
    checked ? radioCls.push(Constant.icon.radio.checked) : null;
    disabled ? radioCls.push(Constant.icon.radio.disabled) : null;
    return (
      <>
        <input
          id={ config.attr.id }
          name={ config.attr.name }
          value={ config.attr.value }
          type="radio"
          checked={ checked }
          disabled={ disabled }
          onChange={ changeHandler }
        />
        <label htmlFor={ config.attr.id }>
          <i className={ radioCls.join(" ") }/>
          {
            config.attr.text
              ? (<span className="text">{ config.attr.text }</span>)
              : null
          }
        </label>
      </>
    );
  };

  return render();
}

export default Radio;
