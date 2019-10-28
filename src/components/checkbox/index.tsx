import * as React from "react";
import ICheckbox from "@types-component/checkbox";
import IProps from "@types-common/props";
import { FormContext } from "@shared/context";
import bus from "@shared/bus";
import { Layout } from "@util";
import "./style.less";

function Checkbox(props: IProps<ICheckbox>) {

  const [config] = React.useState(() => {
    const config = props.config;
    !config.attr ? config.attr = {} : "";
    return config;
  });
  const [formContext] = React.useContext(FormContext);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formContext.data[config.attr.name].indexOf(config.attr.value) > -1) {
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
      <div
        className={Layout.rootClassName(config)}
        style={Layout.rootStyle(config)}
      >
        <div
          className={Layout.containerClassName(config)}
          style={Layout.containerStyle(config)}
        >
          <input
            id={ config.attr.id }
            name={ config.attr.name }
            value={ config.attr.value }
            type="checkbox"
            checked={
              formContext &&
              formContext.data[config.attr.name] &&
              formContext.data[config.attr.name].indexOf(config.attr.value) > -1
            }
            disabled={ !!config.attr.disabled || (formContext && formContext.disabled) }
            onChange={ changeHandler.bind(this) }
          />
          <label htmlFor={ config.attr.id }>
            {/*<span className="square dk-transition-border">
              <i className="checked dk-transition-opacity"></i>
              <i className="half dk-transition-opacity"></i>
            </span>*/}
            <i className={"dk-check-box ____checked-line"}/>
            { config.attr.text ? (<span className="text">{ config.attr.text }</span>) : null }
          </label>
        </div>
      </div>
    );
  };

  return render();

}

export default Checkbox;
