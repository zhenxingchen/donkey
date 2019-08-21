import * as React from "react";
import ICheckbox from "../../types/components/checkbox";
import IProps from "../../types/common/props";
import {FormContext} from "../../shared/context";
import bus from "../../shared/bus";
import util from "../../shared/util";
import "./style.less";

function Checkbox(props: IProps<ICheckbox>) {

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
    setConfig(config);
  }, [ props.config ]);

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
      <div className={`dk-checkbox ${util.getClassName(config.cols)}`}>
        <div className="dk-choice checkbox">
          <input
            id={ config.attr.id }
            name={ config.attr.name }
            value={ config.attr.value }
            type="checkbox"
            checked={
              formContext.data[config.attr.name] &&
              formContext.data[config.attr.name].indexOf(config.attr.value) > -1
            }
            disabled={ !!config.attr.disabled || formContext.disabled }
            onChange={ changeHandler.bind(this) }
          />
          <label className="box" htmlFor={ config.attr.id }>
            <span className="square dk-transition-border">
              <i className="checked dk-transition-opacity"></i>
              <i className="half dk-transition-opacity"></i>
            </span>
            { config.attr.text ? (<span className="text">{ config.attr.text }</span>) : null }
          </label>
        </div>
      </div>
    );
  };

  return render();

}

export default Checkbox;
