import * as React from "react";
import { FormContext } from "@shared/context";
import { CLS } from "@shared/constant";
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
    if (formContext.data[config.name] === config.value) {
      return ;
    }

  };

  const render = () => {
    if (!config) {
      return null;
    }
    const checked = config.value === formContext.data[config.name];
    const disabled = !!config.disabled || formContext.disabled;
    const radioCls = [];
    radioCls.push(CLS.icon.radio.main);
    checked ? radioCls.push(CLS.icon.radio.checked) : null;
    disabled ? radioCls.push(CLS.icon.radio.disabled) : null;
    return (
      <>
        <input
          id={ config.id }
          name={ config.name }
          value={ `${config.value}` }
          type="radio"
          checked={ checked }
          disabled={ disabled }
          onChange={ changeHandler }
        />
        <label htmlFor={ config.id }>
          <i className={ radioCls.join(" ") }/>
          {
            config.text
              ? (<span className="text">{ config.text }</span>)
              : null
          }
        </label>
      </>
    );
  };

  return render();
}

export default Radio;
