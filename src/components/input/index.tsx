import * as React from "react";
import { FormContext, TableContext } from "@shared/context";
import { Layout } from "@util";
import { formUpdateSubject } from "@shared/subject";
import IProps from "@types-common/props";
import IInput from "@types-component/input";
import "./style.less";

function Input(props: IProps<IInput>) {

  const [config, setConfig] = React.useState(() => {
    const config = props.config;
    return config;
  });
  const [formContext] = React.useContext(FormContext);
  const [tableContext] = React.useContext(TableContext);

  React.useEffect(() => {
    eventListener();
    formUpdateSubject.subscribe({
      next: (params) => console.log(
        "input receive subscribe",
        params,
        config.name,
        Date.now()
      )
    });
  }, []);

  const eventListener = () => {

  };

  const eventHandler = (event: "onBlur" | "onChange" | "onFocus", e) => {
    config.form = { ...formContext };
    // setConfig({...config});
    const target = e.target;
    let result = undefined;
    let value = null;
    if (config[event] && typeof config[event] === "function") {
      result = config[event](target);
    }
    if (false === result) {
      return ;
    } else if (true === result || undefined === result) {
      value = target.value;
    } else if (typeof result === "string") {
      value = result;
    }
    config.value = value;
    setConfig({ ...config });
    if (tableContext && tableContext.name) {

    } else if (formContext && formContext.name) {

    }
  };

  const renderInput = () => {
    return (
      <input
        id={ config.id }
        name={ config.name }
        type={ config.type ? config.type : "text" }
        value={ `${config.value}` }
        disabled={ !!config.disabled }
        readOnly={ !!config.readonly }
        maxLength={ config.maxLength }
        autoComplete={ config.autoComplete ? "on" : "off" }
        className={ `dk-form-control dk-transition-border ${Layout.componentClassName(config)}` }
        style={ Layout.componentStyle(config) }
        onBlur={ eventHandler.bind(this, "onBlur") }
        onChange={ eventHandler.bind(this, "onChange") }
        onFocus={ eventHandler.bind(this, "onFocus") }
      />
    );
  };

  const renderNumberStep = () => {
    if (config.type !== 'number') {
      return null;
    }
    return (
      <div className="step">
        <i className="dk-angle ____up"></i>
        <i className="dk-angle ____down"></i>
      </div>
    );
  };

  const render = () => {
    if (!config) {
      return null;
    }
    return renderInput();
  };

  return render();

}

export default Input;
